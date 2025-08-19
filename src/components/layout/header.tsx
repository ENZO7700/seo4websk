
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Seo4WebLogo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import { useState, useMemo } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const baseMainNavLinks = [
    { href: "/#features", label: "SEO Služby" },
    { href: "/sluzby", label: "PWA Služby" },
    { href: "/tahaky", label: "SEO Ťaháky" },
    { href: "/pricing", label: "Cenník" },
];

const resourcesLinks = [
    { href: "/analyzer", label: "Headline Analyzátor" },
    { href: "/seo-analyzer", label: "SEO Analyzátor" },
    { href: "/image-generator", label: "AI Generátor Obrázkov"},
    { separator: true },
    { href: "/seo-audit-akcia", label: "Akčná Ponuka: SEO Audit", isHot: true },
    { href: "/partnersky-program", label: "Partnerský program" },
];


export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  
  const mainNavLinks = useMemo(() => {
    const newLinks = [...baseMainNavLinks];
    if (user) {
        newLinks.push({ href: "/dashboard", label: "Dashboard" });
    }
    return newLinks;
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
        "border-b border-border/50 bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Seo4WebLogo className="h-7 w-7" />
          <span className="font-headline">seo4web</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex flex-wrap">
             {mainNavLinks.map((link) => (
               <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground/70 transition-colors hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
                href="/blog"
                className={cn(
                  "text-foreground/70 transition-colors hover:text-foreground"
                )}
              >
                Blog
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/70 transition-colors hover:text-foreground focus:outline-none">
                Zdroje
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resourcesLinks.map((link, index) => (
                    link.separator ? <DropdownMenuSeparator key={`sep-${index}`} /> :
                    <DropdownMenuItem key={link.href} asChild className={cn(link.isHot && 'text-primary font-bold focus:text-primary')}>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
             {user ? (
                <Button onClick={handleLogout} variant="outline" size="sm" className="hidden md:flex">
                  <LogOut className="mr-2 h-4 w-4" />
                  Odhlásiť sa
                </Button>
            ) : (
                <Button asChild className="hidden md:flex" variant="ghost">
                    <Link href="/login">Prihlásiť sa</Link>
                </Button>
            )}
             <Button asChild className="hidden lg:flex">
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
                                    <Seo4WebLogo className="h-7 w-7" />
                                    <span className="font-headline">seo4web</span>
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
                                        "text-foreground/80 transition-colors hover:text-foreground block"
                                    )}
                                    onClick={() => setIsSheetOpen(false)}
                                    >
                                    {link.label}
                                    </Link>
                               ))}
                                <Link
                                    href="/blog"
                                    className={cn(
                                        "text-foreground/80 transition-colors hover:text-foreground block"
                                    )}
                                    onClick={() => setIsSheetOpen(false)}
                                    >
                                    Blog
                                </Link>
                                <div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center gap-1 w-full text-lg font-medium text-foreground/80 transition-colors hover:text-foreground focus:outline-none">
                                            Zdroje
                                            <ChevronDown className="h-5 w-5" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {resourcesLinks.map((link, index) => (
                                                link.separator ? <DropdownMenuSeparator key={`sep-${index}`} /> :
                                                <DropdownMenuItem key={link.href} asChild className={cn(link.isHot && 'text-primary font-bold focus:text-primary')}>
                                                    <Link href={link.href} onClick={() => setIsSheetOpen(false)}>{link.label}</Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </nav>
                             <div className="mt-auto pt-8 space-y-4">
                                {user ? (
                                    <Button onClick={() => { handleLogout(); setIsSheetOpen(false); }} size="lg" className="w-full">
                                        <LogOut className="mr-2" />
                                        Odhlásiť sa
                                    </Button>
                                ) : (
                                     <Button asChild size="lg" className="w-full" variant="ghost">
                                        <Link href="/login" onClick={() => setIsSheetOpen(false)}>Prihlásiť sa</Link>
                                    </Button>
                                )}
                                <Button asChild size="lg" className="w-full">
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
