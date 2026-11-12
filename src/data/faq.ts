export interface FaqItem {
  question: string;
  answer: string;
}

export const faq = {
  eyebrow: 'Otázky pred spoluprácou',
  title: 'Čo potrebujete vedieť pred spoluprácou',
  lead: 'Ak tu nenájdete odpoveď na svoju otázku, prejdeme ju spolu na úvodnej konzultácii.',
  items: [
    {
      question: 'Ako rýchlo môžeme začať?',
      answer:
        'Príprava projektu trvá približne dva týždne. Počas nich spoznáme váš biznis, nastavíme komunikáciu a pripravíme databázu. Oslovovanie spúšťame na začiatku mesiaca. Konkrétny termín vám potvrdíme podľa dátumu dohody a dokončenia prípravy.',
    },
    {
      question: 'Môžete doplniť náš existujúci obchodný tím?',
      answer:
        'Áno. Môžeme prevziať vyhľadávanie a oslovovanie nových firiem, aby sa váš tím mohol venovať existujúcim klientom a dohodnutým stretnutiam. Službu môžete využiť aj vtedy, ak vlastný obchodný tím nemáte.',
    },
    {
      question: 'Ako vyberáte firmy, ktoré budete oslovovať?',
      answer:
        'Cieľovú skupinu definujeme spoločne na základe vášho produktu alebo služby, obchodných cieľov a potenciálu trhu. Databázu pripravíme podľa dohodnutých kritérií a pred začiatkom oslovovania ju s vami odsúhlasíme.',
    },
    {
      question: 'Komunikujete v mene našej firmy?',
      answer:
        'Áno. Telefonicky komunikujeme v mene vašej spoločnosti. Spôsob oslovenia s vami nastavíme na začiatku spolupráce.',
    },
    {
      question: 'Čo zostáva na nás?',
      answer:
        'Na začiatku nám predstavíte svoju ponuku, obchodné ciele a očakávania. Spoločne odsúhlasíme cieľovú skupinu a spôsob oslovenia. My zabezpečíme akvizíciu a vy sa môžete sústrediť na obchodné rokovania, prípravu ponúk a uzatváranie obchodov.',
    },
    {
      question: 'Garantujete počet obchodných stretnutí?',
      answer:
        'Rozsah akvizičných aktivít nastavujeme vopred podľa zvoleného modelu spolupráce. Počet vzniknutých obchodných príležitostí alebo stretnutí nemožno garantovať, pretože závisí aj od ponuky klienta a aktuálnej situácie na trhu.',
    },
    {
      question: 'Ako budem vedieť, čo sa počas projektu deje?',
      answer:
        'Pravidelne dostávate reporting o priebehu projektu, výsledkoch oslovenia, spätnej väzbe z trhu, dohodnutých stretnutiach a ďalších obchodných aktivitách. Máte tak prehľad o tom, čo sa reálne deje.',
    },
    {
      question: 'Ako sa určuje cena spolupráce?',
      answer:
        'Cena závisí od rozsahu obchodných aktivít a potrieb vašej firmy. Na úvodnej konzultácii si prejdeme vaše ciele a pripravíme individuálny návrh spolupráce.',
    },
  ] satisfies FaqItem[],
} as const;
