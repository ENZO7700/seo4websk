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
    { href: "/pricing", label: "Cenník" },
    { href: "/sluzby", label: "Služby" },
    { href: "/tahaky", label: "SEO Ťaháky" },
    { href: "/blog", label: "Blog" },
];

const resourcesLinks = [
    { href: "/analyzer", label: "Headline Analyzátor" },
    { href: "/image-generator", label: "AI Generátor Obrázkov" },
    { href: "/seo-analyzer", label: "Pokročilý SEO Audit" },
    { href: "/meta-generator", label: "AI Generátor Meta Popisov" },
    { href: "/semantic-analyzer", label: "Sémantický Analyzátor" },
    { separator: true },
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
      // Find the index of the Blog link
      const blogIndex = links.findIndex(link => link.href === "/blog");
      // If Blog link exists, insert Dashboard before it. Otherwise, add to the end.
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
        "border-b border-spaceship bg-galaxy/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <Seo4WebLogo className="h-7 w-7 text-sky" />
          <span className="font-headline text-light">seo4web</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex flex-wrap">
             {mainNavLinks.map((link) => (
               <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-rocket transition-colors hover:text-light"
                )}
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-rocket transition-colors hover:text-light focus:outline-none">
                Zdroje
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resourcesLinks.map((link, index) => (
                    link.separator ? <DropdownMenuSeparator key={`sep-${index}`} /> :
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
                <Button onClick={handleLogout} variant="outline" size="sm" className="hidden md:flex bg-space-grey border-spaceship text-light hover:bg-spaceship">
                  <LogOut className="mr-2 h-4 w-4" />
                  Odhlásiť sa
                </Button>
            ) : (
                <Button asChild className="hidden md:flex" variant="ghost">
                    <Link href="/login">Prihlásiť sa</Link>
                </Button>
            )}
             <Button asChild className="hidden lg:flex" variant="cta">
              <Link href="/contact">Cenová Ponuka</Link>
            </Button>
            <div className="md:hidden">
                 <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="bg-space-grey border-spaceship text-light hover:bg-spaceship">
                            <Menu className="h-5 w-5"/>
                            <span className="sr-only">Otvoriť menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col bg-galaxy border-spaceship text-light">
                        <SheetHeader className="border-b border-spaceship pb-4 flex-row justify-between items-center">
                            <SheetTitle>
                               <Link href="/" className="flex items-center gap-2 text-lg font-bold" onClick={() => setIsSheetOpen(false)}>
                                    <Seo4WebLogo className="h-7 w-7 text-sky" />
                                    <span className="font-headline text-light">seo4web</span>
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
                                        "text-moon transition-colors hover:text-light block"
                                    )}
                                    onClick={() => setIsSheetOpen(false)}
                                    >
                                    {link.label}
                                    </Link>
                               ))}
                                <div>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="flex items-center gap-1 w-full text-lg font-medium text-moon transition-colors hover:text-light focus:outline-none">
                                            Zdroje
                                            <ChevronDown className="h-5 w-5" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            {resourcesLinks.map((link, index) => (
                                                link.separator ? <DropdownMenuSeparator key={`sep-${index}`} /> :
                                                <DropdownMenuItem key={link.href} asChild className={cn(link.isHot && 'text-aurora font-bold focus:text-aurora')}>
                                                    <Link href={link.href} onClick={() => setIsSheetOpen(false)}>{link.label}</Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </nav>
                             <div className="mt-auto pt-8 space-y-4">
                                {authLoading ? null : user ? (
                                    <Button onClick={() => { handleLogout(); setIsSheetOpen(false); }} size="lg" className="w-full bg-space-grey border border-spaceship">
                                        <LogOut className="mr-2" />
                                        Odhlásiť sa
                                    </Button>
                                ) : (
                                     <Button asChild size="lg" className="w-full" variant="ghost">
                                        <Link href="/login" onClick={() => setIsSheetOpen(false)}>Prihlásiť sa</Link>
                                    </Button>
                                )}
                                <Button asChild size="lg" className="w-full" variant="cta">
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
