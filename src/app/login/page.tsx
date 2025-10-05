
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  password: z.string().min(1, { message: 'Prosím, zadajte svoje heslo.' }),
});

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { user, signInWithEmail, signInWithGoogle, loading, error } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });
  
  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const success = await signInWithEmail(values.email, values.password);
    if (success) {
      toast({ title: 'Prihlásenie úspešné!' });
      router.push('/dashboard');
    }
  };

  const handleGoogleSignIn = async () => {
    const success = await signInWithGoogle();
    if (success) {
      toast({ title: 'Prihlásenie úspešné!' });
      router.push('/dashboard');
    }
  };
  
  // This loader is for the case where the component is rendered while auth state is still being determined.
  if (loading && !error) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-space">
            <Loader2 className="h-12 w-12 animate-spin text-sky" />
        </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32 flex items-center justify-center">
      <Card className="w-full max-w-md bg-galaxy border-spaceship text-light">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tighter text-center font-headline">Vitajte Späť!</CardTitle>
          <CardDescription className="text-center text-balance text-rocket">
            Prihláste sa do svojho účtu pre prístup k dashboardu.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Chyba pri prihlásení</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
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
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Heslo</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} disabled={loading} className="bg-space-grey border-spaceship focus:ring-aurora"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-sky hover:bg-night-sky" size="lg" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : 'Prihlásiť sa'}
              </Button>
            </form>
          </Form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-spaceship" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-galaxy px-2 text-rocket">Alebo pokračujte s</span>
            </div>
          </div>

          <Button variant="outline" className="w-full group bg-space-grey border-spaceship hover:bg-spaceship" onClick={handleGoogleSignIn} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : (
                <>
                <svg className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 126 21.2 173.4 58.2l-67.2 67.2c-24.3-23.6-56.6-38.3-92.2-38.3-70.5 0-128.8 57.3-128.8 128.8s58.3 128.8 128.8 128.8c78.8 0 112.3-52.8 115.8-78.8h-116v-91.2h212.3c2.6 12.2 4.4 25.1 4.4 39.3z"></path></svg>
                Google
                </>
            )}
          </Button>

          <p className="text-center text-sm text-rocket">
            Nemáte ešte účet?{' '}
            <Link href="/signup" className="underline hover:text-aurora">
              Zaregistrujte sa
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
