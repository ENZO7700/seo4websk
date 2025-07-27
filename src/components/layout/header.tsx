import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Seo4WebLogo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
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
            <Link
              href="/#features"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              About
            </Link>
             <Link
              href="/analyzer"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              Analyzer
            </Link>
            <Link
              href="/contact"
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
