
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Seo4WebLogo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const mainNavLinks = [
    { href: "/#features", label: "SEO Služby" },
    { href: "/sluzby", label: "PWA Služby" },
    { href: "/tahaky", label: "SEO Ťaháky" },
    { href: "/pricing", label: "Cenník" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/contact", label: "Kontakt" },
];

const resourcesLinks = [
    { href: "/analyzer", label: "Headline Analyzátor" },
    { href: "/seo-analyzer", label: "SEO Analyzátor" },
    { href: "/doplnky", label: "Doplnky" },
    { href: "/kompatibilne-produkty", label: "Kompatibilné produkty" },
    { href: "/partnersky-program", label: "Partnerský program" },
    { href: "/zadarmo-vs-pro", label: "Zadarmo vs. PRO" },
    { href: "/porovnajte-alternativy", label: "Porovnajte alternatívy" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const allLinks = [...mainNavLinks, ...resourcesLinks];

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
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/70 transition-colors hover:text-foreground focus:outline-none">
                Nástroje a Zdroje
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {resourcesLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                        <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
             <Button asChild className="hidden md:flex">
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
                    <SheetContent side="right">
                       <div className="flex flex-col h-full">
                           <div className="flex justify-between items-center border-b pb-4">
                                <Link href="/" className="flex items-center gap-2 text-lg font-bold" onClick={() => setIsSheetOpen(false)}>
                                    <Seo4WebLogo className="h-7 w-7" />
                                    <span className="font-headline">seo4web</span>
                                </Link>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <X className="h-5 w-5" />
                                        <span className="sr-only">Zatvoriť menu</span>
                                    </Button>
                                </SheetTrigger>
                           </div>
                            <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                               {allLinks.map((link) => (
                                   <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-foreground/80 transition-colors hover:text-foreground"
                                    onClick={() => setIsSheetOpen(false)}
                                    >
                                    {link.label}
                                    </Link>
                                ))}
                            </nav>
                             <div className="mt-auto pt-8">
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
