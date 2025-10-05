
# Prompt pre Generovanie Priestorovej SEO Lottie Animácie

**ROLA:** Si expert na motion dizajn a Lottie animácie, špecializujúci sa na tvorbu vizuálne pútavých, ale CPU-nenáročných vektorových animácií.

**CIEĽ:** Vytvor plynulú, 5-7 sekundovú, slučkovú (looping) Lottie animáciu na tému komplexnej SEO stratégie. Animácia musí byť dynamická, priestorová (pseudo-3D) a zároveň extrémne optimalizovaná pre web.

---

### **1. Celkový Koncept & Scéna**

*   **Scéna:** Predstav si digitálny, abstraktný priestor. V strede scény levituje žiariace jadro – mozog s digitálnymi obvodmi (metafora pre AI/stratégiu).
*   **Pohyb:** Okolo tohto jadra pomaly rotujú v troch orbitálnych dráhach rôzne SEO elementy. Kamera sa pomaly približuje a otáča okolo centrálneho jadra, aby vytvorila dojem hĺbky a priestoru.
*   **Štýl:** Čistý, minimalistický, s tenkými líniami (line-art). Žiadne plné farebné plochy, iba obrysy a žiarové efekty (glow), aby bola animácia ľahká na vykreslenie.

---

### **2. Kľúčové Elementy a Ich Animácia**

**A. Centrálne Jadro (Mozog/AI):**
*   **Vizuál:** Minimalistický mozog s jemne pulzujúcimi synapsiami a obvodmi v štýle "circuit board".
*   **Animácia:** Mozog pomaly a jemne pulzuje svetlom. Každých pár sekúnd z neho vystrelí malý svetelný impulz, ktorý prebehne po jednej z orbitálnych dráh k inému elementu.

**B. Orbitálne Elementy (3 dráhy):**

*   **1. Dráha - Analýza (Najbližšie k jadru):**
    *   **Elementy:**
        1.  **Graf:** Ikona stĺpcového grafu, kde stĺpce plynule rastú a klesajú.
        2.  **Lupa:** Zväčšovacie sklo, ktoré sa pomaly pohybuje a za ním sa na chvíľu objaví a zväčší text "CTR" alebo "SERP".
        3.  **Ozubené kolesá:** Dve do seba zapadajúce ozubené kolesá (symbol technického SEO), ktoré sa pomaly otáčajú.
    *   **Animácia dráhy:** Elementy na tejto dráhe sa pohybujú najrýchlejšie.

*   **2. Dráha - Obsah & Kľúčové Slová (Stredná dráha):**
    *   **Elementy:**
        1.  **Textové fragmenty:** Levitujúce slová ako `+PWA`, `+SEO`, `+AI`, `+Content`, ktoré sa jemne vlnia.
        2.  **Ikona dokumentu:** Ikona listu papiera, z ktorej sa postupne "vypisujú" 2-3 riadky vlnoviek (symbol textu).
    *   **Animácia dráhy:** Stredná rýchlosť rotácie.

*   **3. Dráha - Budovanie Autority (Najvzdialenejšia dráha):**
    *   **Elementy:**
        1.  **Spojené body:** Ikona siete (network) – niekoľko bodov spojených čiarami. Keď okolo prejde svetelný impulz z jadra, jedna z čiar sa rozsvieti.
        2.  **Raketa:** Malá, minimalistická raketa, ktorá zanecháva za sebou jemnú stopu z bodiek a pomaly stúpa nahor.
    *   **Animácia dráhy:** Pomalá, majestátna rotácia.

---

### **3. Farebná Paleta & Efekty**

*   **Pozadie:** Transparentné (alpha).
*   **Hlavná farba (obrysy):** Svetlosivá alebo biela (napr. `hsl(225, 25%, 94%)`).
*   **Akcentová farba 1 (impulzy, graf):** Jasná modrá (`hsl(214, 93%, 57%)`).
*   **Akcentová farba 2 (žiara, dôležité prvky):** Neónová zelená (`hsl(149, 71%, 58%)`).
*   **Efekty:** Použi jemný "glow" (žiara) efekt na akcentové farby, ale s nízkou intenzitou, aby to nezaťažovalo CPU. Žiadne zložité tiene ani gradienty.

---

### **4. Technické Špecifikácie & Optimalizácia**

*   **Rozlíšenie:** 512x512 px.
*   **Framerate:** 30 FPS.
*   **Optimalizácia:**
    *   **Kľúčové:** Používaj iba vektorové tvary a cesty. Žiadne bitmapové obrázky.
    *   Vyhni sa zložitým maskám a efektom (alpha mattes).
    *   Obmedz počet súčasne sa pohybujúcich vrstiev. Animuj elementy postupne.
    *   Použi `trim paths` pre efekty kreslenia čiar a `repeater` pre častice (napr. stopa za raketou), je to výkonnejšie ako manuálna animácia desiatok objektov.
    *   Zabezpeč, aby bola výsledná `.json` animácia čo najmenšia (ideálne pod 100 KB).

Tento prompt by mal poskytnúť dostatok detailov na vytvorenie presne takej animácie, akú si želáte.
