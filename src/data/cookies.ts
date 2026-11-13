/**
 * Jediný zoznam cookies, ktoré web používa. Používa ho stránka Zásady cookies
 * aj okno nastavení cookie lišty (tabuľky v jednotlivých kategóriách a automatické
 * mazanie cookies po odvolaní súhlasu).
 */
import { site } from '@/config/site';

export type CookieCategoryId = 'necessary' | 'analytics' | 'marketing';

export interface CookieInfo {
  name: string;
  provider: string;
  purpose: string;
  expiry: string;
}

export interface CookieCategory {
  id: CookieCategoryId;
  title: string;
  description: string;
  cookies: CookieInfo[];
  /** Vzory názvov cookies, ktoré lišta vymaže po odvolaní súhlasu s kategóriou (len na doméne webu). */
  autoClear: RegExp[];
}

const host = new URL(site.url).hostname;

/** Platnosť cookie so súhlasom (predvolená hodnota knižnice vanilla-cookieconsent). */
export const consentCookie = { name: 'cc_cookie', expiresAfterDays: 182 };

export const cookieCategories: CookieCategory[] = [
  {
    id: 'necessary',
    title: 'Nevyhnutné cookies',
    description:
      'Sú potrebné na základné fungovanie webu a nedajú sa vypnúť. Patrí sem cookie, ktorá si pamätá vaše rozhodnutie o používaní cookies, aby sme sa vás nepýtali pri každej návšteve.',
    cookies: [
      {
        name: consentCookie.name,
        provider: host,
        purpose: 'Uchováva vaše rozhodnutie o kategóriách cookies (súhlas alebo odmietnutie).',
        expiry: '6 mesiacov',
      },
    ],
    autoClear: [],
  },
  {
    id: 'analytics',
    title: 'Analytické cookies',
    description:
      'Pomáhajú nám pochopiť, ako návštevníci web používajú – koľko ľudí ho navštívi, ktoré časti si prezerajú a odkiaľ prichádzajú. Údaje sa spracúvajú v súhrnnej podobe. Aktivujú sa iba s vaším súhlasom.',
    cookies: [
      {
        name: '_ga',
        provider: 'Google Analytics',
        purpose: 'Rozlišuje jednotlivých návštevníkov pomocou náhodného identifikátora.',
        expiry: '2 roky',
      },
      {
        name: '_ga_*',
        provider: 'Google Analytics',
        purpose: 'Uchováva stav návštevy (relácie) pre konkrétne meranie.',
        expiry: '2 roky',
      },
    ],
    autoClear: [/^_ga/],
  },
  {
    id: 'marketing',
    title: 'Marketingové cookies',
    description:
      'Slúžia na meranie účinnosti reklamných kampaní a zobrazovanie relevantnej reklamy. Údaje môžu byť zdieľané s reklamnými partnermi (Google). Aktivujú sa iba s vaším súhlasom.',
    cookies: [
      {
        name: '_gcl_au',
        provider: 'Google Ads',
        purpose: 'Meria konverzie z reklamných kampaní (prepojenie kliknutia na reklamu s odoslaním formulára).',
        expiry: '3 mesiace',
      },
      {
        name: '_gcl_aw, _gcl_gs',
        provider: 'Google Ads',
        purpose: 'Uchovávajú identifikátor kliknutia na reklamu, aby bolo možné priradiť konverziu ku kampani.',
        expiry: '3 mesiace',
      },
      {
        name: 'IDE',
        provider: 'Google (doubleclick.net)',
        purpose: 'Používa sa na zobrazovanie relevantnej reklamy a meranie jej výkonu naprieč webmi.',
        expiry: '13 mesiacov',
      },
    ],
    autoClear: [/^_gcl/],
  },
];

/** Tabuľka cookies pre okno nastavení (formát knižnice vanilla-cookieconsent). */
export const cookieTableHeaders = {
  name: 'Názov',
  provider: 'Poskytovateľ',
  purpose: 'Účel',
  expiry: 'Platnosť',
} as const;

export function cookieTableFor(id: CookieCategoryId) {
  const category = cookieCategories.find((c) => c.id === id);
  if (!category || category.cookies.length === 0) return undefined;
  return { headers: { ...cookieTableHeaders }, body: category.cookies.map((c) => ({ ...c })) };
}
