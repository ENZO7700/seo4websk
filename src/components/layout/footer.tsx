
import Link from "next/link";
import { Seo4WebLogo } from "@/components/icons/logo";
import { Github, Twitter, Linkedin, Facebook, Instagram, Phone, Mail, MapPin, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

const footerLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/seo-audit-akcia", label: "Akcia: SEO Audit" },
    { href: "/partnersky-program", label: "Partnerský program" },
    { href: "/contact", label: "Kontakt" },
];

const toolLinks = [
    { href: "/tahaky", label: "AI Asistent" },
    { href: "/analyzer", label: "Headline Analyzátor" },
    { href: "/image-generator", label: "AI Generátor Obrázkov" },
    { href: "/meta-generator", label: "AI Generátor Meta Popisov" },
    { href: "/seo-analyzer", label: "Pokročilý SEO Audit" },
    { href: "/semantic-analyzer", label: "Sémantický Analyzátor" },
];

const extraLinks = [
    { href: "/prompt-engineering", label: "Prompt Stratégia", icon: <BrainCircuit className="h-4 w-4" /> },
    { href: "/experimenty", label: "Experimenty", icon: <BrainCircuit className="h-4 w-4" /> },
]

export function Footer() {
  return (
    <footer id="contact" className={cn(
        "border-t",
        "seo4web:bg-galaxy seo4web:border-spaceship",
        "xedition:bg-background/30 xedition:border-white/10 xedition:backdrop-blur-xl"
        )}>
      <div className="container mx-auto py-12 px-4">
        <div className="grid gap-12 md:grid-cols-5">
            <div className="flex flex-col items-center text-center md:items-start md:text-left col-span-1 md:col-span-2">
              <Link
                href="/"
                className="mb-4 flex items-center gap-2 text-lg font-bold"
              >
                <Seo4WebLogo className="h-7 w-7 text-primary" />
                <span className="font-headline text-foreground">seo4web</span>
              </Link>
              <p className="max-w-sm text-sm text-muted-foreground text-balance">
                Váš strategický partner pre digitálny rast. Poskytujeme komplexné SEO služby a vývoj moderných Progresívnych Webových Aplikácií (PWA).
              </p>
            </div>
           
            <div className="col-span-1 flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Odkazy</h3>
              <div className="flex flex-col items-center space-y-2 md:items-start">
                {footerLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary text-sm">
                        {link.label}
                    </Link>
                ))}
              </div>
            </div>

            <div className="col-span-1 flex flex-col items-center md:items-start">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Nástroje</h3>
              <div className="flex flex-col items-center space-y-2 md:items-start">
                 {toolLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary text-sm">
                        {link.label}
                    </Link>
                ))}
                {extraLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-primary/80 transition-colors hover:text-primary text-sm flex items-center gap-2">
                        {link.icon} {link.label}
                    </Link>
                ))}
              </div>
            </div>

            <div className="col-span-1 flex flex-col items-center md:items-start">
                 <h3 className="text-lg font-semibold mb-4 text-foreground">Sledujte Nás</h3>
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
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} seo4web.sk. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}
