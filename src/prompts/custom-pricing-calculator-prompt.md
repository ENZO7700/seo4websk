
# Prompt na Generovanie Interaktívnej Cenovej Kalkulačky

**ROLA:** Si senior full-stack vývojár špecializujúci sa na Next.js, TypeScript a interaktívne používateľské rozhrania s použitím knižnice `shadcn/ui` a `framer-motion`.

**CIEĽ:** Vytvor React komponent `InteractiveCalculator`, ktorý umožní používateľom dynamicky si vyskladať vlastný balíček služieb (SEO a PWA) a okamžite vidieť odhadovanú cenu. Komponent musí byť prehľadný, intuitívny a vizuálne príťažlivý.

---

### **1. Štruktúra a Vzhľad Komponentu**

*   **Hlavný Layout:** Komponent bude rozdelený do dvoch hlavných stĺpcov na väčších obrazovkách (grid s `lg:grid-cols-3`):
    *   **Ľavý stĺpec (2/3 šírky):** Bude obsahovať formulárové prvky a nastavenia.
    *   **Pravý stĺpec (1/3 šírky):** Bude obsahovať "sticky" kartu so súhrnom ceny, ktorá zostane viditeľná pri scrollovaní.
*   **Komponenty:** Používaj výhradne komponenty z knižnice `shadcn/ui`: `Card`, `Checkbox`, `Label`, `Slider`, `Button`.

---

### **2. Funkcionalita a Stavy (State Management)**

Použi React hook `useState` na spravovanie nasledujúcich stavov:
1.  `services`: Objekt, ktorý drží, či sú služby SEO a/alebo PWA aktívne (napr. `{ seo: boolean, pwa: boolean }`).
2.  `seoKeywords`: Číslo reprezentujúce počet kľúčových slov pre SEO (predvolene napr. 50).
3.  `seoBacklinks`: Číslo reprezentujúce počet spätných odkazov za mesiac (predvolene napr. 5).
4.  `pwaType`: Číslo (alebo string) reprezentujúce typ PWA (napr. 1 pre 'Vizitka', 2 pre 'Business').

### **3. Interaktívne Prvky a Logika Výpočtu**

**A. Výber Služieb:**
*   Použi dva `Checkbox` komponenty (`Priebežné SEO`, `Vývoj PWA`).
*   Ich zaškrtnutie bude aktualizovať stav `services`.
*   Sekcie pre nastavenie SEO a PWA sa zobrazia/skryjú podmienečne na základe tohto stavu (s jemnou animáciou pomocou `framer-motion`).

**B. Nastavenie SEO (zobrazí sa, ak `services.seo` je `true`):**
*   **Slider pre kľúčové slová:**
    *   Rozsah: 10 až 200, krok: 10.
    *   Ovláda stav `seoKeywords`.
    *   Nad sliderom bude `Label` zobrazujúci aktuálnu hodnotu.
*   **Slider pre spätné odkazy:**
    *   Rozsah: 0 až 20, krok: 1.
    *   Ovláda stav `seoBacklinks`.
    *   Nad sliderom bude `Label` zobrazujúci aktuálnu hodnotu.

**C. Nastavenie PWA (zobrazí sa, ak `services.pwa` je `true`):**
*   Použi dve klikateľné `div` (alebo `RadioGroup`) pre výber typu PWA:
    *   'PWA Vizitka (od 999 €)'
    *   'PWA Business (od 2,499 €)'
*   Výber bude ovládať stav `pwaType`.
*   Aktívne zvolená možnosť bude vizuálne odlíšená (napr. hrubším rámčekom a inou farbou pozadia).

**D. Logika Výpočtu Ceny:**
*   Použi `useMemo` na výpočet celkovej ceny, aby sa cena prepočítala len vtedy, keď sa zmení niektorá zo závislostí (`services`, `seoKeywords`, `seoBacklinks`, `pwaType`).
*   **Vzorec:**
    *   Ak je `services.seo` aktívne, pripočítaj: `(seoKeywords * 3) + (seoBacklinks * 30)`. Toto bude **mesačná** platba.
    *   Ak je `services.pwa` aktívne, pripočítaj: `999` (ak `pwaType` je 'Vizitka') alebo `2499` (ak `pwaType` je 'Business'). Toto bude **jednorazová** platba.
    *   **Zobrazenie:** Ak je zvolené len SEO, zobraz text `X € / mesiac`. Ak je zvolené len PWA, zobraz `od X € jednorazovo`. Ak sú zvolené obe, skombinuj to, napr. `X € jednorazovo + Y € / mesiac`.

**E. Súhrnná Karta Ceny:**
*   Zobrazuj vypočítanú cenu alebo kombinovaný text.
*   Obsahuje hlavné CTA tlačidlo "Chcem Ponuku na Mieru", ktoré odkazuje na `/contact`.

---

### **4. Výstup**

Vygeneruj kompletný, funkčný a vizuálne pekný JSX kód pre komponent `InteractiveCalculator`, ktorý bude obsahovať všetku vyššie popísanú logiku a štruktúru. Kód musí byť pripravený na skopírovanie a vloženie do Next.js projektu.

    