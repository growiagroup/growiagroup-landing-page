export interface Model {
  name: string;
  tagline: string;
  scope: string;
  recommended?: boolean;
  text: string;
  benefit: string;
}

export const models = {
  eyebrow: 'Modely spolupráce',
  title: 'Obchodná podpora, ktorá rastie spolu s vašimi ambíciami.',
  lead: 'Či potrebujete otestovať spoluprácu, systematicky získavať nové obchodné príležitosti alebo dlhodobo posilniť svoj obchodný tím, rozsah spolupráce nastavíme podľa vašich cieľov.',
  benefitLabel: 'Hlavný prínos',
  recommendedLabel: 'Odporúčaná spolupráca',
  items: [
    {
      name: 'PILOT',
      tagline: 'Vyskúšajte externé obchodné oddelenie v praxi.',
      scope: 'Overenie trhu – 1 mesiac',
      text: 'Overte si obchodný potenciál vášho produktu či služby. Pripravíme databázu, oslovíme potenciálnych zákazníkov a získate prvé obchodné príležitosti aj spätnú väzbu z trhu.',
      benefit: 'Overíte si našu spoluprácu v praxi bez dlhodobého záväzku.',
    },
    {
      name: 'GROWTH',
      tagline: 'Budujte nové obchodné príležitosti systematicky.',
      scope: 'Pravidelná akvizícia – 3 mesiace',
      recommended: true,
      text: 'Pravidelne oslovujeme nové firmy, nadväzujeme na predchádzajúcu komunikáciu a rozvíjame ich záujem. Výsledky priebežne vyhodnocujeme a optimalizujeme obchodný postup.',
      benefit: 'Získate systematickú obchodnú akvizíciu.',
    },
    {
      name: 'PARTNERSHIP',
      tagline: 'Váš externý obchodný tím.',
      scope: 'Dlhodobá podpora',
      text: 'Stávame sa súčasťou vášho obchodného tímu. Vyhľadávame nové príležitosti, rozvíjame kontakty a prispôsobujeme stratégiu. Vy sa sústredíte na obchodné rokovania a rast firmy.',
      benefit: 'Získate stabilnú obchodnú podporu bez budovania alebo rozširovania vlastného tímu.',
    },
  ] satisfies Model[],
  footer:
    'Neviete, ktorý model je pre vás vhodný? Na úvodnej konzultácii si prejdeme vaše ciele a navrhneme rozsah spolupráce.',
} as const;
