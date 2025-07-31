
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Lexend_Deca } from 'next/font/google';
import { AuthProvider } from "@/components/auth/auth-provider";

export const metadata: Metadata = {
  title: {
    template: '%s | seo4web',
    default: 'seo4web - Expertné SEO služby pre rast vášho biznisu',
  },
  description:
    "seo4web ponúka komplexné SEO služby na zlepšenie viditeľnosti vašej webstránky a zvýšenie pozícií vo vyhľadávačoch. Špecializujeme sa na analýzu kľúčových slov, on-page SEO, link building a technické SEO.",
  keywords: "SEO, optimalizácia pre vyhľadávače, SEO agentúra, link building, technické SEO, on-page SEO, seo4web",
  manifest: "/manifest.webmanifest",
  themeColor: "#22223B",
};

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fontHeadline = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("antialiased", fontBody.variable, fontHeadline.variable)}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            themes={['light', 'dark', 'system', 'seo4web']}
          >
            <Header />
            <div className="relative">{children}</div>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
