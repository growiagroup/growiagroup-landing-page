/** Texty cookie lišty a nastavení (vanilla-cookieconsent). */
export const cookieConsentTexts = {
  consentModal: {
    title: 'Používame cookies',
    description:
      'Nevyhnutné cookies zabezpečujú fungovanie webu. Analytické a marketingové cookies používame len s vaším súhlasom, aby sme vedeli, ako web funguje a ako ho zlepšiť. Viac v <a href="/zasady-cookies">Zásadách cookies</a>.',
    acceptAllBtn: 'Prijať všetky',
    acceptNecessaryBtn: 'Iba nevyhnutné',
    showPreferencesBtn: 'Nastavenia',
  },
  preferencesModal: {
    title: 'Nastavenia cookies',
    acceptAllBtn: 'Prijať všetky',
    acceptNecessaryBtn: 'Iba nevyhnutné',
    savePreferencesBtn: 'Uložiť nastavenia',
    closeIconLabel: 'Zavrieť',
    sections: [
      {
        title: 'Ako cookies používame',
        description:
          'Súbory cookies ukladáme vo vašom prehliadači. Nevyhnutné sú potrebné na fungovanie webu, ostatné kategórie sa aktivujú len s vaším súhlasom. Nastavenia môžete kedykoľvek zmeniť.',
      },
      {
        title: 'Nevyhnutné cookies',
        description: 'Zabezpečujú základné fungovanie webu a uloženie vášho výberu. Nedajú sa vypnúť.',
        linkedCategory: 'necessary',
      },
      {
        title: 'Analytické cookies',
        description: 'Pomáhajú nám pochopiť, ako návštevníci web používajú, aby sme ho mohli zlepšovať.',
        linkedCategory: 'analytics',
      },
      {
        title: 'Marketingové cookies',
        description: 'Používajú sa na meranie účinnosti kampaní a zobrazovanie relevantnej reklamy.',
        linkedCategory: 'marketing',
      },
      {
        title: 'Viac informácií',
        description:
          'Podrobnosti nájdete v <a href="/zasady-cookies">Zásadách cookies</a> a v dokumente <a href="/ochrana-osobnych-udajov">Ochrana osobných údajov</a>.',
      },
    ],
  },
} as const;
