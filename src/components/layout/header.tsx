
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Seo4WebLogo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href: "/#features", label: "Služby" },
    { href: "/tahaky", label: "SEO Ťaháky" },
    { href: "/pricing", label: "Cenník" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/analyzer", label: "Analyzátor" },
    { href: "/contact", label: "Kontakt" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
             {navLinks.map((link) => (
               <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
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
                               {navLinks.map((link) => (
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
