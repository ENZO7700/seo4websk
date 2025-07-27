import Link from "next/link";
import { AetherFlowLogo } from "@/components/icons/logo";
import { Github, Twitter, Linkedin } from "lucide-react";

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
              <AetherFlowLogo className="h-7 w-7" />
              <span className="font-headline">AetherFlow</span>
            </Link>
            <p className="max-w-sm text-center text-sm text-muted-foreground md:text-left">
              A futuristic digital experience built for tomorrow.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AetherFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
