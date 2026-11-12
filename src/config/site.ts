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

  /** Google Tag Manager – ID kontajnera. Prázdny reťazec GTM úplne vypne. */
  gtmId: 'GTM-XXXXXXX',

  /** Kontakt v pätičke. Prázdne hodnoty sa nezobrazia. */
  contact: {
    email: '',
    phone: '',
  },

  /** Firemné údaje v pätičke. Prázdne hodnoty sa nezobrazia. */
  company: {
    legalName: '',
    address: '',
    ico: '',
  },

  /** Hlavné CTA – rovnaké naprieč celým webom. */
  cta: {
    label: 'Požiadať o konzultáciu',
    href: '#konzultacia',
  },

  /** Navigácia v hlavičke aj v pätičke. */
  nav: [
    { label: 'Ako to funguje', href: '#ako' },
    { label: 'O nás', href: '#tim' },
    { label: 'Modely spolupráce', href: '#modely' },
    { label: 'Otázky', href: '#faq' },
  ],

  /** Právne stránky. */
  legal: {
    privacy: { label: 'Ochrana osobných údajov', href: '/ochrana-osobnych-udajov' },
    cookies: { label: 'Zásady cookies', href: '/zasady-cookies' },
  },
} as const;

export type Site = typeof site;
