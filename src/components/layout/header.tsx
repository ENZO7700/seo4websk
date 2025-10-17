
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Seo4WebLogo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, LogOut, Wand2, User } from "lucide-react";
import { useState, useMemo } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const baseMainNavLinks = [
    { href: "/pricing", label: "Cenník" },
    { href: "/sluzby", label: "Služby" },
    { href: "/blog", label: "Blog" },
];

const aiToolLinks = [
    { href: "/tahaky", label: "AI Asistent / Ťaháky" },
    { href: "/analyzer", label: "Headline Analyzátor" },
    { href: "/seo-analyzer", label: "Pokročilý SEO Audit" },
    { href: "/meta-generator", label: "Generátor Meta Popisov" },
    { href: "/semantic-analyzer", label: "Sémantický Analyzátor" },
    { href: "/image-generator", label: "Generátor Obrázkov" },
];

const moreLinks = [
    { href: "/seo-audit-akcia", label: "Akčná Ponuka: SEO Audit", isHot: true },
    { href: "/partnersky-program", label: "Partnerský program" },
];


export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { user, signOut, loading: authLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  
  const mainNavLinks = useMemo(() => {
    let links = [...baseMainNavLinks];
    if (user) {
      const blogIndex = links.findIndex(link => link.href === "/blog");
      if (blogIndex !== -1) {
        links.splice(blogIndex + 1, 0, { href: "/dashboard", label: "Dashboard" });
      } else {
        links.push({ href: "/dashboard", label: "Dashboard" });
      }
    }
    return links;
  }, [user]);

  const handleLogout = async () => {
    const success = await signOut();
    if (success) {
      toast({ title: 'Boli ste úspešne odhlásený.' });
      router.push('/');
    }
  };
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "border-b border-transparent",
        "bg-background/80 backdrop-blur-sm",
        "seo4web:bg-galaxy/80 seo4web:border-spaceship",
        "xedition:bg-background/30 xedition:border-white/10"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Seo4WebLogo className="h-7 w-7 text-primary" />
          <span className="font-headline text-foreground">seo4web</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex flex-wrap">
             {mainNavLinks.map((link) => (
               <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-muted-foreground transition-colors hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
             <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
                <Wand2 className="h-4 w-4 text-primary" />
                AI Nástroje
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {aiToolLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none">
                Viac
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {moreLinks.map((link, index) => (
                    <DropdownMenuItem key={link.href} asChild className={cn(link.isHot && 'text-aurora font-bold focus:text-aurora')}>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
             {authLoading ? null : user ? (
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? user.email ?? ''} />
                                <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuItem asChild>
                            <Link href="/profil">
                                <User className="mr-2 h-4 w-4" />
                                <span>Profil</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Odhlásiť sa</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ) : (
                <Button asChild className="hidden md:flex" variant="ghost">
                    <Link href="/login">Prihlásiť sa</Link>
                </Button>
            )}
             <Button asChild className="hidden lg:flex" variant="default">
              <Link href="/contact">Cenová Ponuka</Link>
            </Button>
            <div className="md:hidden">
                 <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-5 w-5"/>
                            <span className="sr-only">Otvoriť menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col">
                        <SheetHeader className="border-b pb-4 flex-row justify-between items-center">
                            <SheetTitle>
                               <Link href="/" className="flex items-center gap-2 text-lg font-bold" onClick={() => setIsSheetOpen(false)}>
                                    <Seo4WebLogo className="h-7 w-7 text-primary" />
                                    <span className="font-headline text-foreground">seo4web</span>
                                </Link>
                            </SheetTitle>
                            <SheetClose asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="h-5 w-5" />
                                    <span className="sr-only">Zatvoriť menu</span>
                                </Button>
                            </SheetClose>
                        </SheetHeader>
                       <div className="flex flex-col h-full py-6">
                            <nav 
                                className="flex flex-col gap-6 text-lg font-medium"
                            >
                               {mainNavLinks.map((link) => (
                                   <Link
                                    key={link.href}
                                    href={link.href!}
                                    className={cn(
                                        "text-muted-foreground transition-colors hover:text-foreground block"
                                    )}
                                    onClick={() => setIsSheetOpen(false)}
                                    >
                                    {link.label}
                                    </Link>
                               ))}
                                <div>
                                    <h3 className="text-lg font-medium text-muted-foreground flex items-center gap-2 mb-4"><Wand2 className="h-5 w-5 text-primary" /> AI Nástroje</h3>
                                    <div className="flex flex-col gap-4 pl-4 border-l border-border">
                                        {aiToolLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="text-muted-foreground transition-colors hover:text-foreground block"
                                                onClick={() => setIsSheetOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                     <h3 className="text-lg font-medium text-muted-foreground flex items-center gap-2 my-4">Viac</h3>
                                     <div className="flex flex-col gap-4 pl-4 border-l border-border">
                                        {moreLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={cn("transition-colors hover:text-foreground block", link.isHot ? "text-aurora font-bold" : "text-muted-foreground")}
                                                onClick={() => setIsSheetOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                             <div className="mt-auto pt-8 space-y-4">
                                {authLoading ? null : user ? (
                                    <>
                                        <Button asChild size="lg" className="w-full" variant="secondary">
                                            <Link href="/profil" onClick={() => setIsSheetOpen(false)}>
                                                <User className="mr-2" />
                                                Môj Profil
                                            </Link>
                                        </Button>
                                        <Button onClick={() => { handleLogout(); setIsSheetOpen(false); }} size="lg" className="w-full" variant="outline">
                                            <LogOut className="mr-2" />
                                            Odhlásiť sa
                                        </Button>
                                    </>
                                ) : (
                                     <Button asChild size="lg" className="w-full" variant="ghost">
                                        <Link href="/login" onClick={() => setIsSheetOpen(false)}>Prihlásiť sa</Link>
                                    </Button>
                                )}
                                <Button asChild size="lg" className="w-full" variant="default">
                                    <Link href="/contact" onClick={() => setIsSheetOpen(false)}>Získať Cenovú Ponuku</Link>
                                </Button>
                            </div>
                       </div>
                    </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
