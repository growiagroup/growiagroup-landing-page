export interface Stat {
  value: string;
  /** Menšia prípona za číslom, napr. "rokov". */
  suffix?: string;
  label: string;
}

export interface CaseStudy {
  title: string;
  challenge: string;
  stats: Stat[];
  benefit: string;
}

export const results = {
  eyebrow: 'Výsledky z praxe',
  title: 'Skúsenosti nášho tímu v číslach',
  stats: [
    { value: '33 000+', label: 'Obchodných oslovení' },
    { value: '2 000+', label: 'Obchodných príležitostí' },
    { value: '15+', suffix: 'rokov', label: 'Obchodných skúseností' },
  ] satisfies Stat[],
  disclaimer:
    'Výsledky vychádzajú z projektov realizovaných členmi tímu Growia Group počas ich predchádzajúcej profesionálnej praxe aj v rámci Growia Group.',
  caseLabel: 'Prípadová štúdia',
  challengeLabel: 'Čo sme riešili',
  resultsLabel: 'Výsledky',
  benefitLabel: 'Prínos spolupráce',
  cases: [
    {
      title: 'Automatizované skladové riešenia',
      challenge:
        'Vyhľadávali sme výrobné a logistické firmy s investičným potenciálom, oslovovali rozhodovateľov, identifikovali investičné potreby a vytvárali obchodné príležitosti.',
      stats: [
        { value: '1 491', label: 'Obchodných oslovení' },
        { value: '2 489', label: 'Odoslaných e-mailov' },
        { value: '138', label: 'Obchodných príležitostí' },
      ],
      benefit:
        'Prevzali sme prvotnú akvizíciu a vytvorili nové obchodné príležitosti, aby sa klient mohol sústrediť na rokovania a uzatváranie zákaziek.',
    },
    {
      title: 'Profesionálne služby priemyselnej práčovne',
      challenge:
        'Oslovovali sme hotely, ubytovacie zariadenia a ďalšie prevádzky, zisťovali ich potreby a overovali záujem o práčovenské služby.',
      stats: [
        { value: '357', label: 'Obchodných oslovení' },
        { value: '101', label: 'Odoslaných e-mailov' },
        { value: '35', label: 'Obchodných príležitostí' },
      ],
      benefit:
        'Otvorili sme klientovi dvere k novým zákazníkom a vytvorili priestor na individuálne ponuky, obchodné rokovania a budovanie dlhodobých vzťahov.',
    },
  ] satisfies CaseStudy[],
} as const;
