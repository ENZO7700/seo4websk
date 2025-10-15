
ROLE: Ste expert na UX/UI dizajn a senior full-stack vývojár so špecializáciou na React a interaktívne webové aplikácie.

TASK: Navrhnite a vytvorte pokročilú, interaktívnu cenovú kalkulačku pre sťahovacie služby v Bratislave. Cieľom je poskytnúť zákazníkovi čo najpresnejší odhad ceny a zároveň získať všetky potrebné informácie pre vytvorenie finálnej ponuky.

TECHNICKÉ ŠPECIFIKÁCIE:
- Použite React.js, TypeScript a knižnicu shadcn/ui pre komponenty.
- Dizajn musí byť čistý, moderný, intuitívny a plne responzívny.
- Využite komponenty ako `Select`, `Slider`, `Input`, `Checkbox`, `Card`, `Button`.

POŽADOVANÉ FUNKCIE KALKULAČKY:

1.  **VÝBER LOKALITY (FROM/TO):**
    *   Vytvorte dva `Select` komponenty: "Sťahovanie Z" a "Sťahovanie DO".
    *   Oba selecty musia obsahovať zoznam VŠETKÝCH oficiálnych mestských častí Bratislavy (napr. Staré Mesto, Ružinov, Petržalka, Nové Mesto, Karlova Ves, atď.).
    *   Pridajte možnosť "Mimo Bratislavy". Ak používateľ zvolí túto možnosť, zobrazí sa `Input` pole, kde môže zadať odhadovanú vzdialenosť v km.
    *   **Pokročilá logika:** Vytvorte funkciu, ktorá na pozadí (môže byť zjednodušená matica vzdialeností) odhadne vzdialenosť v km medzi dvoma zvolenými mestskými časťami. Pre jednoduchosť môžete použiť preddefinované priemerné vzdialenosti. Ak je jedna z lokalít "Mimo Bratislavy", použije sa hodnota zo zobrazeného inputu.

2.  **TYP NEHNUTEĽNOSTI A POSCHODIE:**
    *   `Select` pre výber typu nehnuteľnosti (Garsónka, 1-izbový byt, ..., Rodinný dom).
    *   Dve `Input` polia (typ number) pre zadanie poschodia: "Poschodie Z" a "Poschodie DO".
    *   Dva `Checkbox` komponenty: "Výťah k dispozícii (Z)" a "Výťah k dispozícii (DO)". Prítomnosť výťahu môže ovplyvniť odhadovaný čas práce.

3.  **ROZSAH SLUŽIEB:**
    *   `Slider` alebo `RadioGroup` pre výber počtu pracovníkov (1, 2, 3+).
    *   `Checkbox` pre doplnkové služby:
        *   "Potrebujem aj montáž/demontáž nábytku" (pridá odhadovaný čas k celkovému výpočtu).
        *   "Potrebujem baliaci materiál" (pridá fixnú sumu alebo sumu podľa typu bytu).
        *   "Ťažké bremeno (klavír, trezor)" (môže zobraziť upozornenie na individuálnu cenu).

4.  **VÝPOČET A ZOBRAZENIE CENY (v reálnom čase):**
    *   Na pravej strane (na desktope) alebo pod formulárom (na mobile) zobrazte `Card` s prehľadným rozpisom odhadovanej ceny.
    *   **Rozpis musí obsahovať:**
        *   Odhadovaný čas práce (v hodinách) - vypočítaný na základe typu bytu, poschodí a doplnkových služieb.
        *   Cena za prácu (odhadovaný čas * hodinová sadzba podľa počtu pracovníkov).
        *   Cena za dopravu (paušál v BA alebo cena za km).
        *   Cena za doplnkové služby (napr. baliaci materiál).
        *   **Celková odhadovaná cena.**
    *   Zohľadnite minimálnu sumu výjazdu (70 €). Ak je vypočítaná suma nižšia, zobrazte minimálnu sumu.
    *   Ak používateľ zvolí "Rodinný dom" alebo "Ťažké bremeno", kalkulačka zobrazí text "Na vyžiadanie" a CTA tlačidlo "Vyžiadať individuálnu ponuku".

5.  **FINÁLNY VÝSTUP (CTA):**
    *   Pod odhadovanou cenou umiestnite výrazné `Button` tlačidlo, napr. "Nezáväzne objednať" alebo "Vyžiadať presnú ponuku", ktoré presmeruje na kontaktný formulár a predvyplní zvolené parametre.

VÝSLEDNÝ KÓD:
Vygeneruj kompletný, funkčný JSX komponent v jednom súbore, ktorý bude obsahovať celú logiku kalkulačky a bude pripravený na vloženie do Next.js stránky. Kód musí byť čistý, dobre okomentovaný a ľahko rozšíriteľný.
