
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Lexend_Deca } from 'next/font/google';
import { AuthProvider } from "@/components/auth/auth-provider";
import Script from "next/script";

const APP_NAME = "Seo4Web AI Suite";
const APP_DEFAULT_TITLE = "Seo4Web AI Suite – SEO na autopilote s umelou inteligenciou";
const APP_TITLE_TEMPLATE = "%s | Seo4Web AI Suite";
const APP_DESCRIPTION = "AI nástroje pre audit, copywriting a kľúčové slová. Vyskúšaj Seo4Web AI Suite na 7 dní zdarma a urýchli rast organiky.";


export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  keywords: "SEO, AI, copywriting, audit, kľúčové slová, umelá inteligencia, marketing, seo4web",
  alternates: {
    canonical: 'https://seo4web.sk/',
    languages: {
      'sk-SK': 'https://seo4web.sk/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://seo4web.sk/',
    title: 'Seo4Web AI Suite – SEO na autopilote',
    description: 'AI, ktorá doručí výsledky v SERP.',
    images: [{
      url: 'https://seo4web.sk/og-cover.jpg',
      width: 1200,
      height: 630,
      alt: 'Seo4Web AI Suite'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seo4Web AI Suite – SEO na autopilote',
    description: 'AI, ktorá doručí výsledky v SERP.',
    images: ['https://seo4web.sk/og-cover.jpg'],
  },
};

export const viewport = {
  themeColor: "#0d1117",
  width: 'device-width',
  initialScale: 1,
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
    <html lang="sk" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <Script id="json-ld-schema" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": ["SoftwareApplication", "Organization"],
              "name": "Seo4Web AI Suite",
              "url": "https://seo4web.sk/",
              "applicationCategory": "BusinessApplication",
              "offers": {"@type":"Offer","price":"49","priceCurrency":"EUR"},
              "publisher": {"@type":"Organization","name":"SEO4WEB.SK"},
              "aggregateRating": {"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"57"}
            }
          `}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></Script>
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </head>
      <body className={cn("antialiased", fontBody.variable, fontHeadline.variable)}>
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="seo4web"
            enableSystem={false}
            disableTransitionOnChange
            themes={['light', 'dark', 'seo4web', 'xedition']}
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
