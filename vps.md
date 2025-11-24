# Návod na Nasadenie na VPS

Vaša aplikácia je pripravená na produkčné nasadenie. Tu je stručný postup, ako ju nasadiť na váš vlastný virtuálny server (VPS).

### 1. Pripojte sa na váš VPS
Použite SSH na pripojenie k vášmu serveru.
```bash
ssh pouzivatel@vasa-ip-adresa
```

### 2. Nainštalujte potrebné nástroje
Uistite sa, že máte na serveri nainštalovaný `git` a `Node.js` (odporúčame verziu 20 alebo novšiu). Ak nie, nainštalujte ich pomocou správcu balíkov vašej distribúcie (napr. `apt` pre Debian/Ubuntu).
```bash
# Príklad pre Ubuntu
sudo apt update
sudo apt install -y nodejs npm git
```

### 3. Naklonujte si projekt
Naklonujte si kód vašej aplikácie z vášho GitHub repozitára.
```bash
git clone [URL_VÁŠHO_REPOZITÁRA]
cd [NÁZOV_PRIEČINKA_PROJEKTU]
```

### 4. Vytvorte produkčný `.env` súbor
Aplikácia potrebuje premenné prostredia pre pripojenie k Firebase. Vytvorte súbor `.env` v koreňovom adresári projektu.
```bash
touch .env
```
Otvorte súbor v textovom editore (napr. `nano .env`) a vložte doň vaše kľúče. Súbor by mal vyzerať takto:
```
# Súbor: .env

NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### 5. Nainštalujte závislosti a spustite build
Tieto príkazy stiahnu všetky potrebné knižnice a vytvoria optimalizovanú, produkčnú verziu vašej Next.js aplikácie.
```bash
npm install
npm run build
```

### 6. Spustite produkčný server pomocou `pm2`
Na spustenie a správu aplikácie v produkcii sa dôrazne odporúča použiť procesný manažér ako `pm2`. Zabezpečí, že vaša aplikácia bude bežať nepretržite a automaticky sa reštartuje v prípade pádu.
```bash
# Nainštalujte pm2 globálne
npm install -g pm2

# Spustite aplikáciu
pm2 start npm --name "seo4web" -- run start
```
Váš projekt sa teraz spustí na porte definovanom v `package.json` (predvolene 3000).

### (Voliteľné) Nastavenie reverzného proxy s Nginx
Ak chcete, aby bola vaša aplikácia dostupná na štandardnom porte 80 (HTTP) a 443 (HTTPS) cez vašu doménu, odporúčame použiť Nginx ako reverzný proxy.

---

Vaša aplikácia by teraz mala byť úspešne nasadená a bežať na vašom VPS.
