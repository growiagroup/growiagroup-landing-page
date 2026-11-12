import type { IconName } from '@/components/ui/Icon.astro';

export interface ForWhomItem {
  icon: IconName;
  title: string;
  help: string;
}

export const forWhom = {
  eyebrow: 'Pre koho je Growia',
  title: 'Chcete nových zákazníkov, no chýba vám kapacita alebo kontakty?',
  intro:
    'Vyhľadávanie nových zákazníkov a prvotné oslovovanie firiem si vyžaduje čas, ktorý môžete venovať obchodným rokovaniam a uzatváraniu zákaziek. My túto časť obchodu prevezmeme za vás. A ak vlastný obchodný tím nemáte, staneme sa vašou externou obchodnou podporou.',
  helpLabel: 'Ako pomôžeme',
  items: [
    {
      icon: 'clock',
      title: 'Váš obchodný tím nestíha aktívnu akvizíciu',
      help: 'Prevezmeme prvotné oslovovanie potenciálnych zákazníkov a rozpracovanie obchodných príležitostí. Vaši obchodníci získajú viac priestoru na rokovania a uzatváranie obchodov.',
    },
    {
      icon: 'chat',
      title: 'Máte obchodný tím, ale chcete viac nových príležitostí',
      help: 'Rozšírime vaše obchodné aktivity o systematické telefonické oslovovanie nových spoločností. Oslovíme za vás trh, na ktorý váš tím nemá dostatočné kapacity.',
    },
    {
      icon: 'database',
      title: 'Nemáte vlastné obchodné oddelenie alebo vhodnú databázu',
      help: 'Nastavíme vám akvizičný proces, pripravíme databázu cieľových spoločností a aktívne ich oslovíme vo vašom mene.',
    },
  ] satisfies ForWhomItem[],
} as const;
