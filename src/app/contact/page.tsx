
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
import { useState } from "react";
import { generateReply } from "@/ai/flows/generate-reply-flow";
import { saveContactMessage } from "@/services/contactService";
import { isFirebaseConfigured } from "@/lib/firebase-config";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Meno musí mať aspoň 2 znaky.",
  }),
  email: z.string().email({
    message: "Prosím, zadajte platnú e-mailovú adresu.",
  }),
  message: z.string().min(10, {
    message: "Správa musí mať aspoň 10 znakov.",
  }).max(500, {
    message: "Správa nesmie byť dlhšia ako 500 znakov."
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firebaseConfigured = isFirebaseConfigured();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // First, save the message to Firestore
      await saveContactMessage(values);
      
      // Then, generate the AI reply
      const result = await generateReply({ name: values.name });
      
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

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
       <div className="flex justify-center">
        <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter md:text-4xl font-headline text-center">Kontaktujte Nás</CardTitle>
            <CardDescription className="text-center text-balance">
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
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Odosielam..." : "Odoslať Správu"}
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

    