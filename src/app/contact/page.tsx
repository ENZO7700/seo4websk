"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { generateReply } from "@/ai/flows/generate-reply-flow";
import { saveContactMessage } from "@/services/contactService";
import { isFirebaseConfigured } from "@/lib/firebase-config";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";

const formSchema = z.object({
  message: z.string().min(10, {
    message: "Správa musí mať aspoň 10 znakov.",
  }).max(500, {
    message: "Správa nesmie byť dlhšia ako 500 znakov."
  }),
});

const anonymousFormSchema = formSchema.extend({
    name: z.string().min(2, {
        message: "Meno musí mať aspoň 2 znaky.",
    }),
    email: z.string().email({
        message: "Prosím, zadajte platnú e-mailovú adresu.",
    }),
});


export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const firebaseConfigured = isFirebaseConfigured();

  const currentFormSchema = user ? formSchema : anonymousFormSchema;
  
  const form = useForm<z.infer<typeof currentFormSchema>>({
    resolver: zodResolver(currentFormSchema),
    defaultValues: user 
        ? { message: "" }
        : { name: "", email: "", message: "" },
  });
  
  useEffect(() => {
    // Reset form with new default values when user logs in or out
    form.reset(user ? { message: "" } : { name: "", email: "", message: "" });
  }, [user, form]);


  async function onSubmit(values: z.infer<typeof currentFormSchema>) {
    setIsSubmitting(true);
    try {
      const contactData = {
          name: user?.displayName || (values as any).name || 'Anonym',
          email: user?.email || (values as any).email,
          message: values.message,
          userId: user?.uid || null,
      };

      await saveContactMessage(contactData);
      
      const result = await generateReply({ name: contactData.name });
      
      toast({
        title: "Správa odoslaná!",
        description: result.message,
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Nastala chyba!",
        description: "Vyskytol sa problém s vašou požiadavkou. Skúste to prosím znova.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (authLoading) {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
       <div className="flex justify-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter md:text-4xl font-headline text-center">Kontaktujte Nás</CardTitle>
            <CardDescription className="text-center text-balance text-muted-foreground">
              Máte otázku alebo záujem o bezplatnú cenovú ponuku? Vyplňte formulár nižšie.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!firebaseConfigured ? (
               <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Konfigurácia Chýba</AlertTitle>
                  <AlertDescription>
                    Kontaktný formulár je dočasne mimo prevádzky z dôvodu chýbajúcej konfigurácie. Prosím, skúste to neskôr.
                  </AlertDescription>
                </Alert>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {!user && (
                    <>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Meno</FormLabel>
                                <FormControl>
                                <Input placeholder="Vaše Meno" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input placeholder="vas.email@priklad.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </>
                  )}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Správa</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Povedzte nám o vašom projekte alebo položte otázku"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {user ? (
                     <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? "Odosielam..." : "Odoslať Správu"}
                     </Button>
                  ) : (
                     <div className="text-center p-4 bg-muted/50 rounded-lg border">
                        <p className="text-muted-foreground mb-4">Pre jednoduchšie odoslanie a zobrazenie histórie správ v dashborde sa môžete prihlásiť.</p>
                         <Button asChild variant="outline" className="w-full mb-2">
                            <Link href="/login">Prihlásiť sa</Link>
                         </Button>
                         <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                           {isSubmitting ? "Odosielam..." : "Odoslať ako hosť"}
                         </Button>
                     </div>
                  )}
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
