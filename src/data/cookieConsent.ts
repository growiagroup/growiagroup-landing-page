/**
 * Texty cookie lišty a nastavení (vanilla-cookieconsent). Popisy kategórií sú v cookies.ts;
 * tabuľky konkrétnych cookies sú zámerne len na stránke Zásady cookies, nie v okne nastavení.
 */
import { cookieCategories } from './cookies';

const categorySections = cookieCategories.map((category) => ({
  title: category.title,
  description: category.description,
  linkedCategory: category.id,
}));

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
      ...categorySections,
      {
        title: 'Viac informácií',
        description:
          'Podrobnosti nájdete v <a href="/zasady-cookies">Zásadách cookies</a> a v dokumente <a href="/ochrana-osobnych-udajov">Ochrana osobných údajov</a>.',
      },
    ],
  },
};
