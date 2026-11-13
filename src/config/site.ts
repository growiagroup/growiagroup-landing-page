/**
 * Centrálna konfigurácia webu.
 * Všetko, čo sa môže v budúcnosti meniť (doména, GTM, kontakty, firemné údaje),
 * sa mení iba tu a prejaví sa na celom webe.
 */
export const site = {
  name: 'Growia Group',
  url: 'https://go.growiagroup.sk',
  lang: 'sk',
  locale: 'sk_SK',
  tagline: 'Grow Together. Create Tomorrow.',

  /**
   * Adobe Fonts (Typekit) kit s nadpisovým fontom TT Ricordi Allegria.
   * Prázdny reťazec kit vypne – vtedy sa použije Marcellus alebo súbory v public/fonts/.
   */
  fontKitUrl: 'https://use.typekit.net/mwn8kim.css' as string,

  /** Google Tag Manager – ID kontajnera. Prázdny reťazec GTM úplne vypne. */
  gtmId: 'GTM-W8WKVDTM' as string,

  /** Kontakt v pätičke. Prázdne hodnoty sa nezobrazia. */
  contact: {
    email: 'sales@growiagroup.sk' as string,
    phones: ['+421 949 019 074', '+421 948 958 380'] as string[],
  },

  /** Firemné údaje v pätičke. Prázdne hodnoty sa nezobrazia. */
  company: {
    legalName: 'GROWIA GROUP, s. r. o.' as string,
    address: 'Okružná 2468/13, 900 31 Stupava' as string,
    ico: '55951686' as string,
    dic: '2122140130' as string,
  },

  /** Hlavné CTA – rovnaké naprieč celým webom. */
  cta: {
    label: 'Požiadať o konzultáciu',
    href: '/#konzultacia',
  },

  /** Navigácia v hlavičke aj v pätičke. */
  nav: [
    { label: 'Ako to funguje', href: '/#ako' },
    { label: 'O nás', href: '/#tim' },
    { label: 'Modely spolupráce', href: '/#modely' },
    { label: 'Otázky', href: '/#faq' },
  ],

  /** Právne stránky. */
  legal: {
    privacy: { label: 'Ochrana osobných údajov', href: '/ochrana-osobnych-udajov' },
    cookies: { label: 'Zásady cookies', href: '/zasady-cookies' },
  },
} as const;

export type Site = typeof site;
