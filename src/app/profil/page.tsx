
'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    toast({
        title: "Odhlásenie úspešné",
        description: "Boli ste bezpečne odhlásený.",
    });
    router.push('/');
  }

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-24 sm:py-32">
        <div className="flex flex-col items-center justify-center space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                    Môj Profil
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
                    Spravujte nastavenia svojho účtu a predplatného.
                </p>
            </div>
            
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Vitajte, {user.displayName || user.email}!</CardTitle>
                    <CardDescription>Tu nájdete informácie o svojom účte.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Informácie o účte</h4>
                        <p className="text-muted-foreground"><span className="font-medium text-foreground">Email:</span> {user.email}</p>
                        <p className="text-muted-foreground"><span className="font-medium text-foreground">UID:</span> {user.uid}</p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Správa predplatného</h4>
                        <p className="text-muted-foreground">Aktuálne máte aktívny balík: <span className="font-bold text-primary">PRO</span></p>
                        <Button variant="outline">Zmeniť balík</Button>
                    </div>

                     <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Nastavenia</h4>
                        <Button variant="destructive" onClick={handleSignOut}>Odhlásiť sa</Button>
                    </div>
                    
                </CardContent>
            </Card>
        </div>

    </main>
  );
}
