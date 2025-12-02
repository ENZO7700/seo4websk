
# 🚀 Seo4Web AI Suite

**Vaše SEO na Autopilota.** Vitajte v repozitári projektu **Seo4Web AI Suite** – all-in-one platformy pre moderný digitálny marketing, ktorá spája silu umelej inteligencie s najnovšími webovými technológiami. Tento projekt bol vytvorený s cieľom zautomatizovať a zefektívniť SEO, copywriting a analytické procesy.

![Ukážka Aplikácie](https://raw.githubusercontent.com/ENZO7700/seo4websk/main/public/og-cover.jpg)

---

## ✨ Kľúčové Funkcie

Seo4Web AI Suite je nabitý nástrojmi, ktoré marketérom, copywriterom a majiteľom firiem šetria čas a prinášajú merateľné výsledky.

-   **🤖 AI Asistent & Znalostná Databáza:** Interaktívna databáza, kde AI odpovedá na vaše SEO otázky na základe osvedčených postupov.
-   **📈 Pokročilý SEO Audit:** Získajte hĺbkovú analýzu akejkoľvek webovej stránky vrátane konkrétnych odporúčaní, akčných plánov a pripravených úryvkov kódu na opravu chýb.
-   **✍️ AI Copywriting Nástroje:**
    -   **Headline Analyzer:** Ohodnoťte silu vašich titulkov a získajte lepšie, klikateľnejšie alternatívy.
    -   **Meta Description Generator:** Vytvorte 3 unikátne, SEO-friendly meta popisy pre akúkoľvek URL.
-   **🔎 Analyzátor Sémantickej Relevancie:** Zistite, ako dobre váš text pokrýva danú tému a získajte návrhy na chýbajúce kľúčové entity.
-   **🎨 AI Generátor Obrázkov:** Vytvorte unikátne, fotorealistické obrázky na základe textového popisu pre vaše články alebo marketingové materiály.
-   **📊 Používateľský Dashboard:** Personalizovaný prehľad kľúčových metrík (KPI), výkonnosti kľúčových slov a zoznam odoslaných správ.
-   **🔒 Autentifikácia & Profil Používateľa:** Bezpečné prihlasovanie cez email/heslo alebo Google účet, s možnosťou správy profilu.
-   **📱 Plná podpora PWA (Progressive Web App):** Aplikácia je plne inštalovateľná na mobilné zariadenia a desktopy pre zážitok ako z natívnej aplikácie.

## 🛠️ Technologický Zásobník (Tech Stack)

Projekt je postavený na moderných a škálovateľných technológiách:

-   **Framework:** [Next.js](https://nextjs.org/) 15 (App Router)
-   **Jazyk:** [TypeScript](https://www.typescriptlang.org/)
-   **AI Backend:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit)
-   **UI Komponenty:** [Shadcn/UI](https://ui.shadcn.com/)
-   **Štýlovanie:** [Tailwind CSS](https://tailwindcss.com/)
-   **Databáza a Autentifikácia:** [Firebase](https://firebase.google.com/) (Firestore, Authentication, Storage)
-   **Animácie:** [Framer Motion](https://www.framer.com/motion/) & [Lottie](https://lottiefiles.com/)
-   **Hosting:** [Vercel](https://vercel.com/) / Vlastné VPS

## 🚀 Spustenie projektu lokálne

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
    Vytvorte súbor `.env` v koreňovom adresári projektu a vložte doň vaše Firebase a Genkit API kľúče. Súbor by mal vyzerať takto:
    ```env
    # Firebase Configuration
    NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
    NEXT_PUBLIC_FIREBASE_APP_ID=...

    # Google AI (Genkit) API Key
    GEMINI_API_KEY=AIza...
    ```

4.  **Spustite vývojový server:**
    ```bash
    npm run dev
    ```
    Aplikácia bude dostupná na adrese `http://localhost:9002`.

## 📦 Nasadenie na Produkciu

Projekt je optimalizovaný pre nasadenie na **Vercel** alebo na vlastný **VPS**. Podrobný návod na nasadenie na VPS nájdete v súbore `vps.md`.

---

Tento projekt vznikol v rámci **Firebase Studia**. Všetky úpravy a vylepšenia boli realizované v spolupráci s AI asistentom.
