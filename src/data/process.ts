export interface ProcessStep {
  title: string;
  owner: string;
  text: string;
}

export const process = {
  eyebrow: 'Ako spolupráca funguje',
  title: 'My otvárame nové obchodné príležitosti.<br />Vy ich premieňate na obchod.',
  lead: 'Štyri kroky od prvého rozhovoru po rozpracovanú obchodnú príležitosť',
  steps: [
    {
      title: 'Spoznáme váš biznis a nastavíme stratégiu',
      owner: 'Growia',
      text: 'Analyzujeme ponuku, obchodné ciele a cieľové skupiny. Spoločne nastavíme spôsob oslovenia a očakávané výstupy.',
    },
    {
      title: 'Identifikujeme potenciálnych zákazníkov',
      owner: 'Growia',
      text: 'Pripravíme relevantnú databázu spoločností a kontaktov na oslovenie podľa dohodnutých kritérií.',
    },
    {
      title: 'Aktívne oslovujeme a vytvárame záujem',
      owner: 'Growia',
      text: 'Telefonicky komunikujeme vo vašom mene, predstavujeme hodnotu vašej ponuky, zisťujeme potreby potenciálnych zákazníkov a identifikujeme obchodný potenciál.',
    },
    {
      title: 'Váš obchodný tím sa venuje predaju, nie hľadaniu zákazníkov',
      owner: 'Growia',
      text: 'Prinášame vám rozpracované obchodné príležitosti a relevantné informácie o potenciálnych zákazníkoch. Vaši obchodníci tak získavajú viac času na rokovania a uzatváranie obchodov.',
    },
  ] satisfies ProcessStep[],
  outcome: {
    eyebrow: 'Čo od nás dostanete',
    title: 'Nové obchodné príležitosti. Relevantné kontakty. Viac priestoru na predaj.',
    image: { alt: 'Detail podania ruky pri obchodnom stretnutí' },
  },
} as const;
