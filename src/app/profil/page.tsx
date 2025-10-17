
'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { Loader2, User, Key, CreditCard, Edit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export default function ProfilePage() {
  const { user, loading, signOut, updateUserInfo, updateUserPassword } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  
  const [displayName, setDisplayName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if(user?.displayName){
      setDisplayName(user.displayName);
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

  const handleUpdateProfile = async () => {
      if(!user) return;
      setIsUpdating(true);
      const success = await updateUserInfo({ displayName });
      if(success) {
          toast({ title: 'Profil aktualizovaný!' });
          setIsEditingName(false);
      }
      setIsUpdating(false);
  };
  
  const handleUpdatePassword = async () => {
    if(newPassword.length < 6) {
        toast({ variant: 'destructive', title: 'Slabé heslo', description: 'Heslo musí mať aspoň 6 znakov.'});
        return;
    }
    setIsUpdating(true);
    const success = await updateUserPassword(newPassword);
     if(success) {
        toast({ title: 'Heslo úspešne zmenené!' });
        setNewPassword('');
    }
    setIsUpdating(false);
  }

  const handleAvatarClick = () => {
      fileInputRef.current?.click();
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
          setIsUpdating(true);
          const success = await updateUserInfo({ photoFile: file });
          if(success) {
             toast({ title: 'Profilová fotka aktualizovaná!' });
          }
          setIsUpdating(false);
      }
  };

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
                <CardHeader className="text-center items-center">
                    <div className="relative group cursor-pointer" onClick={handleAvatarClick}>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user.photoURL || ''} alt={user.displayName || user.email || ''} />
                            <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Edit className="h-8 w-8 text-white" />
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                    </div>
                    <CardTitle>Vitajte, {user.displayName || user.email}!</CardTitle>
                    <CardDescription>Tu nájdete informácie o svojom účte.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    {user.providerData.some(p => p.providerId === 'password') && (
                       <div className="space-y-4">
                            <h4 className="font-semibold text-foreground flex items-center gap-2"><User className="h-5 w-5"/> Informácie o účte</h4>
                            <div className="space-y-2">
                                {isEditingName ? (
                                    <div className="flex items-center gap-2">
                                        <Input value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="max-w-xs"/>
                                        <Button onClick={handleUpdateProfile} disabled={isUpdating}>{isUpdating ? <Loader2 className="animate-spin" /> : 'Uložiť'}</Button>
                                        <Button variant="ghost" onClick={() => setIsEditingName(false)}>Zrušiť</Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <p className="text-muted-foreground"><span className="font-medium text-foreground">Meno:</span> {user.displayName || "Nezadané"}</p>
                                        <Button variant="ghost" size="icon" onClick={() => setIsEditingName(true)}><Edit className="h-4 w-4" /></Button>
                                    </div>
                                )}
                                <p className="text-muted-foreground"><span className="font-medium text-foreground">Email:</span> {user.email}</p>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground flex items-center gap-2"><CreditCard className="h-5 w-5"/> Správa predplatného</h4>
                        <Alert>
                          <AlertTitle>Máte aktívny balík: <span className="font-bold text-primary">PRO</span></AlertTitle>
                          <AlertDescription className="mt-2">
                            Ďakujeme, že využívate naše prémiové služby. Váš balík sa automaticky obnoví o 20 dní.
                          </AlertDescription>
                        </Alert>
                        <div className="flex gap-2">
                          <Button variant="outline">Zmeniť balík</Button>
                          <Button variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10">Zrušiť predplatné</Button>
                        </div>
                    </div>

                     {user.providerData.some(p => p.providerId === 'password') && (
                        <div className="space-y-4">
                            <h4 className="font-semibold text-foreground flex items-center gap-2"><Key className="h-5 w-5"/> Zmena hesla</h4>
                             <div className="flex items-center gap-2">
                                <Input type="password" placeholder="Nové heslo" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="max-w-xs"/>
                                <Button onClick={handleUpdatePassword} disabled={isUpdating || newPassword.length < 6}>{isUpdating ? <Loader2 className="animate-spin" /> : 'Zmeniť heslo'}</Button>
                             </div>
                        </div>
                     )}
                    
                     <div className="space-y-2 border-t pt-6 text-center">
                        <Button variant="destructive" onClick={handleSignOut} disabled={isUpdating}>
                            {isUpdating ? <Loader2 className="animate-spin" /> : "Odhlásiť sa zo všetkých zariadení"}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>

    </main>
  );
}
