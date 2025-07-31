
import Link from "next/link";
import { Seo4WebLogo } from "@/components/icons/logo";
import { Github, Twitter, Linkedin, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = [
    { href: "/analyzer", label: "Headline Analyzátor" },
    { href: "/seo-analyzer", label: "SEO Analyzátor" },
    { href: "/partnersky-program", label: "Partnerský program" },
    { href: "/contact", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-muted/50">
      <div className="container mx-auto py-12 px-4">
        <div className="grid gap-12 md:grid-cols-4">
            <div className="flex flex-col items-center text-center md:items-start md:text-left col-span-1">
              <Link
                href="/"
                className="mb-4 flex items-center gap-2 text-lg font-bold"
              >
                <Seo4WebLogo className="h-7 w-7" />
                <span className="font-headline">seo4web</span>
              </Link>
              <p className="max-w-sm text-sm text-muted-foreground text-balance">
                seo4web je váš strategický partner pre digitálny rast. Poskytujeme komplexné SEO služby a vývoj moderných Progresívnych Webových Aplikácií (PWA), ktoré posunú vaše podnikanie na novú úroveň. Naším cieľom sú merateľné výsledky a váš úspech.
              </p>
            </div>
           
            <div className="col-span-1 flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Rýchle Odkazy</h3>
              <div className="flex flex-col items-center space-y-2 md:items-start">
                {footerLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary text-sm">
                        {link.label}
                    </Link>
                ))}
              </div>
            </div>

            <div className="col-span-1 flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4">Kontaktné Informácie</h3>
              <div className="space-y-3 flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0"/>
                      <p className="text-muted-foreground text-sm">Ružová dolina 45, 821 09 Bratislava</p>
                  </div>
                   <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary"/>
                      <a href="tel:+421123456789" className="text-muted-foreground text-sm hover:text-primary">+421 123 456 789</a>
                  </div>
                   <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary"/>
                      <a href="mailto:info@seo4web.sk" className="text-muted-foreground text-sm hover:text-primary">info@seo4web.sk</a>
                  </div>
              </div>
            </div>

            <div className="col-span-1 flex flex-col items-center md:items-start">
                 <h3 className="text-lg font-semibold mb-4">Sledujte Nás</h3>
                  <div className="flex items-center justify-center md:justify-start gap-4">
                    <Link href="#" aria-label="Facebook" className="transition-transform hover:scale-110 active:scale-95">
                      <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                    <Link href="#" aria-label="Instagram" className="transition-transform hover:scale-110 active:scale-95">
                      <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                    <Link href="#" aria-label="Twitter" className="transition-transform hover:scale-110 active:scale-95">
                      <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                    <Link href="#" aria-label="LinkedIn" className="transition-transform hover:scale-110 active:scale-95">
                      <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
                    </Link>
                  </div>
            </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} seo4web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
