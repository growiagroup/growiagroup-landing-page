/**
 * Texty právnych stránok. Každá stránka je zoznam sekcií (nadpis + odseky).
 * Odseky môžu obsahovať jednoduché HTML (odkazy, zvýraznenie).
 */
export interface LegalSection {
  heading?: string;
  paragraphs: string[];
}

export interface LegalPage {
  title: string;
  description: string;
  /** Dátum poslednej aktualizácie v tvare RRRR-MM-DD. Prázdny = nezobrazí sa. */
  updated: string;
  /** Kým je true, stránka zobrazí upozornenie, že text sa pripravuje. */
  draft: boolean;
  sections: LegalSection[];
}

export const privacyPage: LegalPage = {
  title: 'Ochrana osobných údajov',
  description: 'Informácie o spracúvaní osobných údajov spoločnosťou Growia Group.',
  updated: '',
  draft: true,
  sections: [
    {
      heading: 'Prevádzkovateľ',
      paragraphs: ['Text sa pripravuje. Doplňte obchodné meno, sídlo, IČO a kontaktné údaje prevádzkovateľa.'],
    },
    {
      heading: 'Aké údaje spracúvame a prečo',
      paragraphs: [
        'Text sa pripravuje. Opíšte údaje z formulára žiadosti o konzultáciu (meno a priezvisko, e-mail, názov spoločnosti, oblasť záujmu), účel spracúvania a právny základ.',
      ],
    },
    {
      heading: 'Doba uchovávania a príjemcovia',
      paragraphs: ['Text sa pripravuje. Uveďte dobu uchovávania a sprostredkovateľov (napr. hosting Netlify, Google Tag Manager).'],
    },
    {
      heading: 'Vaše práva',
      paragraphs: ['Text sa pripravuje. Uveďte práva dotknutej osoby a spôsob ich uplatnenia.'],
    },
  ],
};

export const cookiesPage: LegalPage = {
  title: 'Zásady cookies',
  description: 'Informácie o používaní súborov cookies na webe Growia Group.',
  updated: '',
  draft: true,
  sections: [
    {
      heading: 'Čo sú cookies',
      paragraphs: ['Text sa pripravuje. Krátke vysvetlenie, čo sú súbory cookies a na čo slúžia.'],
    },
    {
      heading: 'Aké cookies používame',
      paragraphs: [
        'Text sa pripravuje. Kategórie: nevyhnutné (uloženie súhlasu), analytické a marketingové (načítavané cez Google Tag Manager až po udelení súhlasu).',
      ],
    },
    {
      heading: 'Ako zmeniť nastavenia',
      paragraphs: [
        'Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať tlačidlom nižšie alebo v nastaveniach prehliadača.',
      ],
    },
  ],
};
