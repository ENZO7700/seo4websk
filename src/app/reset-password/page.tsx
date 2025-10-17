
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

const formSchema = z.object({
  email: z.string().email({ message: 'Prosím, zadajte platnú e-mailovú adresu.' }),
});

export default function ResetPasswordPage() {
  const { toast } = useToast();
  const { resetPassword, loading, error } = useAuth();
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const success = await resetPassword(values.email);
    if (success) {
      toast({
        title: 'Email odoslaný!',
        description: 'Skontrolujte si svoju emailovú schránku pre ďalšie inštrukcie.',
      });
      setEmailSent(true);
    }
  };

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32 flex items-center justify-center">
      <Card className="w-full max-w-md bg-galaxy border-spaceship text-light">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tighter text-center font-headline">Obnoviť Heslo</CardTitle>
          <CardDescription className="text-center text-balance text-rocket">
            Zadajte svoj email a my vám pošleme odkaz na obnovu hesla.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Chyba</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {emailSent ? (
             <Alert>
              <AlertTitle>Email bol úspešne odoslaný</AlertTitle>
              <AlertDescription>
                Skontrolujte si prosím svoju doručenú poštu (aj priečinok spam) a postupujte podľa pokynov v emaile na obnovenie vášho hesla.
                 <div className="mt-4">
                    <Button asChild>
                        <Link href="/login">Späť na prihlásenie</Link>
                    </Button>
                </div>
              </AlertDescription>
            </Alert>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="vas.email@priklad.com" {...field} disabled={loading} className="bg-space-grey border-spaceship focus:ring-aurora"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-sky hover:bg-night-sky" size="lg" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin" /> : 'Odoslať odkaz na obnovu'}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
