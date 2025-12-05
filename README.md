
<div align="center">
  <a href="https://seo4web.sk/">
    <img src="https://raw.githubusercontent.com/ENZO7700/seo4websk/main/public/og-cover.jpg" alt="Seo4Web AI Suite" width="100%">
  </a>
  <h1 align="center">Seo4Web AI Suite</h1>
  <p align="center">
    <strong>Vaše SEO na Autopilota: All-in-one AI platforma pre moderný digitálny marketing.</strong>
  </p>
  <p align="center">
    <a href="https://github.com/ENZO7700/seo4websk/actions/workflows/ci.yml">
      <img src="https://github.com/ENZO7700/seo4websk/actions/workflows/ci.yml/badge.svg" alt="CI Status">
    </a>
    <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FENZO7700%2Fseo4websk&env=GEMINI_API_KEY,NEXT_PUBLIC_FIREBASE_API_KEY,NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,NEXT_PUBLIC_FIREBASE_PROJECT_ID,NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,NEXT_PUBLIC_FIREBASE_APP_ID&project-name=seo4web-ai-suite&repository-name=seo4web-ai-suite">
      <img src="https://vercel.com/button" alt="Deploy with Vercel">
    </a>
  </p>
</div>

---

**Seo4Web AI Suite** je komplexná platforma navrhnutá na automatizáciu a zefektívnenie SEO, copywritingu a analytických procesov. Spojením sily umelej inteligencie s najnovšími webovými technológiami poskytujeme marketérom, copywriterom a majiteľom firiem nástroje na dosiahnutie merateľných výsledkov a úsporu času.

## ✨ Kľúčové Funkcie

Platforma je nabitá nástrojmi, ktoré pokrývajú celý životný cyklus SEO a content marketingu.

| Funkcia                      | Popis                                                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **🤖 AI Asistent & Ťaháky**      | Interaktívna znalostná databáza, kde AI odpovedá na vaše SEO otázky na základe osvedčených postupov.             |
| **📈 Pokročilý SEO Audit**      | Hĺbková analýza akejkoľvek URL s konkrétnymi odporúčaniami, akčnými plánmi a pripravenými úryvkami kódu.         |
| **✍️ Headline Analyzer**       | Ohodnoťte silu vašich titulkov a získajte okamžité, klikateľnejšie alternatívy.                               |
| **✍️ Meta Description Generator** | Vygenerujte 3 unikátne, SEO-friendly meta popisy pre akúkoľvek URL na základe jej obsahu.                      |
| **🔎 Analyzátor Sémantiky** | Zistite, ako dobre váš text pokrýva danú tému, a získajte návrhy na chýbajúce kľúčové entity.                  |
| **🎨 AI Generátor Obrázkov**    | Vytvorte unikátne, fotorealistické obrázky na základe textového popisu pre vaše články a kampane.                 |
| **📊 Používateľský Dashboard**  | Personalizovaný prehľad kľúčových metrík (KPI), výkonnosti kľúčových slov a zoznam odoslaných správ.          |
| **🔒 Autentifikácia & Profil**  | Bezpečné prihlasovanie cez email/heslo alebo Google, s možnosťou správy používateľského profilu.                |
| **📱 Plná podpora PWA**         | Aplikácia je plne inštalovateľná na mobilné zariadenia a desktopy pre zážitok ako z natívnej aplikácie.          |

## 🛠️ Technologický Zásobník (Tech Stack)

Projekt je postavený na moderných, škálovateľných a enterprise-ready technológiách.

-   **Framework:** [Next.js](https://nextjs.org/) 14 (App Router)
-   **Jazyk:** [TypeScript](https://www.typescriptlang.org/)
-   **AI Backend:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit)
-   **UI Komponenty:** [Shadcn/UI](https://ui.shadcn.com/)
-   **Štýlovanie:** [Tailwind CSS](https://tailwindcss.com/)
-   **Databáza & Autentifikácia:** [Firebase](https://firebase.google.com/) (Firestore, Authentication, Storage)
-   **Animácie:** [Framer Motion](https://www.framer.com/motion/) & [Lottie](https://lottiefiles.com/)
-   **Progresívna Webová Aplikácia (PWA):** [@ducanh2912/next-pwa](https://www.npmjs.com/package/@ducanh2912/next-pwa)
-   **Hosting:** [Vercel](https://vercel.com/) / Vlastné VPS

## 🚀 Lokálne Spustenie

Pre spustenie projektu na vašom lokálnom stroji postupujte podľa nasledujúcich krokov:

1.  **Naklonujte repozitár:**
    ```bash
    git clone https://github.com/ENZO7700/seo4websk.git
    cd seo4websk
    ```

2.  **Nainštalujte závislosti:**
    ```bash
    npm install
    ```

3.  **Nastavte premenné prostredia:**
    Skopírujte šablónu `.env.example` a vytvorte vlastný `.env` súbor.
    ```bash
    cp .env.example .env
    ```
    Otvorte súbor `.env` a vyplňte vaše Firebase a Genkit API kľúče.

4.  **Spustite vývojový server:**
    ```bash
    npm run dev
    ```
    Aplikácia bude dostupná na adrese `http://localhost:9002`.

## 📦 Nasadenie na Produkciu

### Nasadenie na Vercel (Odporúčané)

Projekt je optimalizovaný pre nasadenie na **Vercel**. Kliknite na tlačidlo nižšie pre jednoduché a rýchle nasadenie:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FENZO7700%2Fseo4websk&env=GEMINI_API_KEY,NEXT_PUBLIC_FIREBASE_API_KEY,NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,NEXT_PUBLIC_FIREBASE_PROJECT_ID,NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,NEXT_PUBLIC_FIREBASE_APP_ID&project-name=seo4web-ai-suite&repository-name=seo4web-ai-suite)

### Nasadenie na VPS

Podrobný návod na nasadenie na vlastný virtuálny server nájdete v súbore `vps.md`.

---

Tento projekt vznikol v rámci **Firebase Studia**. Všetky úpravy a vylepšenia boli realizované v spolupráci s AI asistentom.
