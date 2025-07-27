import Link from "next/link";
import { Seo4WebLogo } from "@/components/icons/logo";
import { Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer id="contact" className="border-t bg-muted/50">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="mb-2 flex items-center gap-2 text-lg font-bold"
            >
              <Seo4WebLogo className="h-7 w-7" />
              <span className="font-headline">seo4web</span>
            </Link>
            <p className="max-w-sm text-center text-sm text-muted-foreground md:text-left">
              Expert SEO services for growing businesses.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter" className="transition-transform hover:scale-110 active:scale-95">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="GitHub" className="transition-transform hover:scale-110 active:scale-95">
              <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="transition-transform hover:scale-110 active:scale-95">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} seo4web. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
