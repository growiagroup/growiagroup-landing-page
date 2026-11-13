import type { ImageMetadata } from 'astro';
import groupPhoto from '@/assets/images/team/zakladatelky.webp';
import petraPhoto from '@/assets/images/team/petra-handlova.webp';
import marikaPhoto from '@/assets/images/team/marika-heglasova.webp';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  quote: string;
  initials: string;
  /** Portrét 4:5 (min. 800 × 1000 px). Ak chýba, zobrazia sa iniciálky. */
  photo?: ImageMetadata;
}

export const team = {
  eyebrow: 'O nás',
  title: 'Ľudia za Growia Group',
  /** Spoločná fotografia (3:2). Zobrazuje sa v pomere 589:248 ako v dizajne, orezaná s dôrazom na hornú časť záberu. */
  groupPhoto: groupPhoto as ImageMetadata | undefined,
  groupPhotoAlt: 'Petra Handlová a Marika Heglasová, zakladateľky Growia Group',
  intro:
    'Growia Group vznikla spojením dlhoročných skúseností a spoločnej vízie, že kvalitný obchod stojí na ľuďoch, dôvere a systematickej práci. Naším cieľom je pomáhať firmám získavať nových zákazníkov a poskytovať im obchodnú podporu, ktorá funguje ako prirodzená súčasť ich vlastného tímu.',
  members: [
    {
      name: 'Petra Handlová',
      role: 'Spolumajiteľka a konateľka',
      initials: 'PH',
      photo: petraPhoto,
      bio: 'Petra má 15+ rokov obchodných skúseností, od riadenia prevádzok a regiónov po pozíciu obchodnej riaditeľky. Do Growia Group prináša skúsenosti so strategickým riadením, obchodnými rokovaniami, vedením tímov a budovaním klientskych vzťahov. Využíva ich pri rozvoji obchodných príležitostí a dlhodobých partnerstiev.',
      quote:
        'Vždy som verila, že úspech v obchode začína pri ľuďoch. Ak im dáme priestor rásť, dokážu vytvárať hodnotu, ktorá presahuje samotné obchodné výsledky.',
    },
    {
      name: 'Marika Heglasová',
      role: 'Spolumajiteľka a konateľka',
      initials: 'MH',
      photo: marikaPhoto,
      bio: 'Marika prepája skúsenosti z predaja a obchodných rokovaní s rozvojom ľudí. Pôsobila ako obchodná zástupkyňa, HR manažérka, školiteľka obchodných tímov a lektorka komunikačných zručností. Do Growia Group prináša skúsenosti s vedením a vzdelávaním tímov, ktoré podporujú obchodné aktivity a vzťahy s klientmi.',
      quote: 'Keď rastú ľudia, rastie aj firma.',
    },
  ] satisfies TeamMember[],
} as const;
