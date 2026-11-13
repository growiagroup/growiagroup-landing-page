# Growia Group – landing page

Jednostránkový web spoločnosti Growia Group (externé obchodné oddelenie a B2B akvizícia).
Beží na doméne **go.growiagroup.sk**, hostovaný na Netlify, nasadzovaný automaticky z GitHubu.

## Technológie

| Oblasť | Riešenie |
| --- | --- |
| Framework | [Astro](https://astro.build) 7, statický výstup (`output: 'static'`) |
| Štýly | Tailwind CSS 4 (`@tailwindcss/vite`), dizajnové tokeny v `src/styles/global.css` |
| Jazyk | TypeScript (strict) |
| Fonty | Self-hostované: Manrope, Marcellus (fontsource) a TT Ricordi Allegria (vlastné súbory) |
| Obrázky | Astro `<Image>` / `<Picture>` – AVIF/WebP, responzívne veľkosti |
| Formulár | Netlify Forms (natívne), odosielanie cez `fetch`, po úspechu presmerovanie na `/dakujeme` |
| Meranie | Google Tag Manager + Google Consent Mode v2, cookie lišta `vanilla-cookieconsent` |
| SEO | Meta tagy, Open Graph, JSON-LD (Organization, FAQPage), sitemap, robots.txt |
| Hosting | Netlify (`netlify.toml`), Node 22 |

## Požiadavky

- Node.js **>= 22.23.4** (odporúčané cez `nvm`)
- npm 10+

## Príkazy

| Príkaz | Čo robí |
| --- | --- |
| `npm install` | nainštaluje závislosti |
| `npm run dev` | spustí dev server (Astro 7 ho spúšťa na pozadí, adresa sa vypíše do terminálu) |
| `npx astro dev stop` | zastaví dev server na pozadí |
| `npm run build` | vytvorí produkčný build do `dist/` |
| `npm run preview` | lokálne spustí produkčný build |
| `npm run check` | typová kontrola Astro + TypeScript |
| `npm test` | jednotkové testy (validácia formulára, dataLayer) |

## Štruktúra projektu

```text
/
├── public/                 statické súbory (favicony, robots.txt, fonty TT Ricordi Allegria)
├── src/
│   ├── assets/             obrázky a logá spracovávané Astrom (optimalizácia pri builde)
│   ├── components/
│   │   ├── ui/             znovupoužiteľné prvky (Button, Container, Eyebrow, SectionHeading, …)
│   │   ├── sections/       sekcie landing page (Hero, ForWhom, Process, Results, …)
│   │   ├── form/           formulár žiadosti o konzultáciu
│   │   ├── seo/            <Seo> hlavička, JSON-LD
│   │   └── analytics/      GTM, Consent Mode, cookie lišta
│   ├── config/
│   │   └── site.ts         JEDINÉ miesto pre doménu, názov, GTM ID, kontakty, firemné údaje
│   ├── data/               všetky texty webu (typované objekty), bez CMS
│   ├── layouts/            Layout.astro (html skeleton, fonty, SEO, GTM)
│   ├── lib/                čistá logika (validácia formulára, súhlas, štruktúrované dáta)
│   ├── pages/              routy: /, /dakujeme, /ochrana-osobnych-udajov, /zasady-cookies, 404
│   └── styles/global.css   Tailwind + dizajnové tokeny (@theme) + globálne štýly
├── astro.config.mjs
├── netlify.toml            build, hlavičky, presmerovania
└── package.json
```

## Kde sa čo mení

### Texty a obsah
Všetky texty sú v `src/data/`. Každá sekcia má vlastný súbor (`hero.ts`, `faq.ts`, `team.ts`, …).
Komponenty obsah len vykresľujú, takže zmena textu je úprava jedného objektu.

### Doména, GTM, kontakty, firemné údaje
Súbor `src/config/site.ts`. Konkrétne:

- `siteUrl` – kanonická doména (`https://go.growiagroup.sk`)
- `gtmId` – Google Tag Manager kontajner (`GTM-XXXXXXX`), zmena na tomto jednom mieste sa prejaví na celom webe
- `contact` – e-mail a zoznam telefónov (ak sú prázdne, v pätičke sa nezobrazia)
- `company` – obchodné meno, sídlo, IČO, DIČ (ak sú prázdne, v pätičke sa nezobrazia)

### Fonty
- Manrope a Marcellus sa inštalujú cez npm (`@fontsource-variable/manrope`, `@fontsource/marcellus`).
- **TT Ricordi Allegria** sa načítava z Adobe Fonts (Typekit) kitu, ktorého URL je v `src/config/site.ts`
  (`fontKitUrl`). V kite musia byť povolené domény `go.growiagroup.sk` a `localhost` (pre vývoj)
  a kit musí zostať aktívny v Adobe účte, ktorý ho vytvoril. Ak sa kit nenačíta, web plynulo
  použije Marcellus.
- Alternatívne (bez Adobe Fonts) stačí nahrať súbory `.woff2` do `public/fonts/`
  s týmito názvami (rez určuje hrúbku písma):

  | Súbor | font-weight |
  | --- | --- |
  | `TTRicordiAllegria-Regular.woff2` | 400 |
  | `TTRicordiAllegria-Medium.woff2` | 500 |
  | `TTRicordiAllegria-DemiBold.woff2` (alebo `-SemiBold`) | 600 |
  | `TTRicordiAllegria-Bold.woff2` | 700 |

  Pri builde sa pre existujúce súbory automaticky vygeneruje `@font-face` (`src/lib/headingFont.ts`),
  takže netreba meniť kód. Kým súbory chýbajú, prehliadač použije Marcellus
  (font stack je `'TT Ricordi Allegria', Marcellus, Georgia, serif`). Web používa rezy 500 a 600.

### Obrázky
Zdrojové obrázky sú v `src/assets/`. Používajte komponent `<Image>` / `<Picture>` z `astro:assets`,
Astro pri builde vygeneruje AVIF/WebP vo viacerých veľkostiach. Do `public/` patria len súbory,
ktoré sa nemajú spracovávať (favicony, OG obrázok, fonty).

## Formulár (Netlify Forms)

- Formulár má atribút `data-netlify="true"`, `name="konzultacia"` a honeypot pole `bot-field`.
- Netlify ho rozpozná pri builde zo statického HTML. Po prvom deployi sa objaví v Netlify
  v sekcii **Forms → konzultacia**.
- **Notifikácie** (e-mail pri novej žiadosti) sa nastavujú v Netlify:
  *Site configuration → Forms → Form notifications → Add notification → Email notification*.
- Odosielanie prebieha cez `fetch` na `/`; chyba servera sa zobrazí priamo vo formulári,
  po úspechu sa prejde na `/dakujeme`. Bez JavaScriptu sa formulár odošle klasicky
  a Netlify presmeruje na `/dakujeme` tiež.
- Konverzný event `generate_lead` sa do `dataLayer` posiela na stránke `/dakujeme`
  (`src/pages/dakujeme.astro`), ktorá sa zobrazí len po úspešnom odoslaní.

## Meranie a cookies

- GTM sa načítava v `Layout.astro` cez komponent `GoogleTagManager.astro`, ID berie z `src/config/site.ts`.
- Pred GTM sa nastaví Consent Mode v2 s predvoleným stavom `denied` pre všetky kategórie.
- Cookie lišta (`vanilla-cookieconsent` v3, `src/components/analytics/CookieConsent.astro`) po súhlase
  zavolá `gtag('consent', 'update', …)` a pošle do dataLayeru event `cookie_consent_update`
  s parametrom `consent_categories`.
  Kategórie: nevyhnutné (vždy), analytické → `analytics_storage`,
  marketingové → `ad_storage`, `ad_user_data`, `ad_personalization`, `personalization_storage`.
  Mapovanie je v `src/lib/consent.ts`.
- Pri ďalšej návšteve sa uložená voľba (cookie `cc_cookie`) aplikuje inline skriptom ešte pred načítaním GTM.
- Lišta sa nezobrazuje botom a crawlerom (predvolené správanie knižnice).
- Tlačidlo s atribútom `data-cc="show-preferencesModal"` kdekoľvek na webe otvorí nastavenia cookies
  (je v pätičke a na stránke Zásady cookies).
- Texty lišty sú v `src/data/cookieConsent.ts`.

### Nastavenie v GTM
V kontajneri treba vytvoriť trigger typu *Custom Event* s názvom `generate_lead` a naviazať naň
konverzný tag (GA4 event / Google Ads conversion). Tagy GA4 a Google Ads v GTM rešpektujú
Consent Mode automaticky.

## Nasadenie (Netlify + GitHub)

1. Repozitár: `https://github.com/growiagroup/growiagroup-landing-page`, vetva `main`.
2. V Netlify: *Add new site → Import an existing project → GitHub → tento repozitár*.
   Build nastavenia sa načítajú z `netlify.toml` (`npm run build`, publish `dist`, Node 22).
3. Každý push do `main` spustí build a nasadí novú verziu. Pull requesty dostanú deploy preview.

### Napojenie domény go.growiagroup.sk

1. Netlify → *Domain management → Add a domain → go.growiagroup.sk*.
2. U správcu DNS domény `growiagroup.sk` pridajte záznam:

   | Typ | Názov | Hodnota |
   | --- | --- | --- |
   | CNAME | `go` | `<nazov-site>.netlify.app` |

3. Po propagácii DNS Netlify automaticky vystaví certifikát Let's Encrypt (HTTPS).
4. V Netlify nastavte `go.growiagroup.sk` ako **primary domain**, aby `*.netlify.app` presmerovávalo.

## Testy a kontrola kvality

- `npm test` – jednotkové testy (`vitest`) pre validáciu formulára, mapovanie súhlasu,
  štruktúrované dáta a načítanie fontov.
- `npm run check` – `astro check` (typy v `.astro` aj `.ts` súboroch).
- Netlify spúšťa iba `npm run build`; testy spúšťajte lokálne pred pushom.

## SEO

- Title, description, canonical a Open Graph sa skladajú v `src/components/seo/Seo.astro`
  z hodnôt v `src/config/site.ts` a props stránky.
- JSON-LD: `Organization` (celý web) a `FAQPage` (z `src/data/faq.ts`).
- `sitemap-index.xml` generuje `@astrojs/sitemap`, `public/robots.txt` naň odkazuje.
- OG obrázok: `public/og-image.png` (1200 × 630).

## Pred spustením do produkcie

- [ ] Overiť, že Adobe Fonts kit má povolenú doménu `go.growiagroup.sk` a font display nastavený na `swap`
- [ ] Doplniť texty stránok *Ochrana osobných údajov* a *Zásady cookies*
- [ ] Doplniť spoločnú fotografiu zakladateliek (3:2) a portréty (4:5) v `src/data/team.ts`
      (import obrázka zo `src/assets/images/` a priradenie do `groupPhoto` / `photo`)
- [ ] Nastaviť e-mailové notifikácie formulára v Netlify
- [ ] Overiť doručenie testovacej žiadosti z produkčnej domény
