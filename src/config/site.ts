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
  gtmId: 'GTM-XXXXXXX' as string,

  /** Kontakt v pätičke. Prázdne hodnoty sa nezobrazia. */
  contact: {
    email: 'test@email.com' as string,
    phone: '+421 975 547 567' as string,
  },

  /** Firemné údaje v pätičke. Prázdne hodnoty sa nezobrazia. */
  company: {
    legalName: '' as string,
    address: '' as string,
    ico: '' as string,
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
