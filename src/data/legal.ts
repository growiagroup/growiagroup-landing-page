/**
 * Texty právnych stránok. Každá stránka je zoznam sekcií, sekcia je zoznam blokov:
 * odsek (reťazec, môže obsahovať jednoduché HTML), podnadpis, odrážky alebo pojem s vysvetlením.
 */
import { site } from '@/config/site';

export type LegalBlock =
  | string
  | { subheading: string }
  | { list: string[] }
  | { term: string; text: string };

export interface LegalSection {
  heading?: string;
  content: LegalBlock[];
}

export interface LegalPage {
  title: string;
  description: string;
  /** Dátum účinnosti v tvare RRRR-MM-DD. Prázdny = nezobrazí sa. */
  updated: string;
  /** Kým je true, stránka zobrazí upozornenie, že text sa pripravuje. */
  draft: boolean;
  sections: LegalSection[];
}

const { company, contact } = site;
const emailLink = `<a href="mailto:${contact.email}">${contact.email}</a>`;
const companyBlock = `${company.legalName}<br>${company.address}<br>IČO: ${company.ico}<br>DIČ: ${company.dic}<br>E-mail: ${emailLink}<br>Tel.: ${contact.phones.join(', ')}`;
const authorityBlock =
  'Úrad na ochranu osobných údajov Slovenskej republiky<br>Hraničná 12<br>820 07 Bratislava 27<br>Slovenská republika<br><a href="https://dataprotection.gov.sk" rel="noopener" target="_blank">dataprotection.gov.sk</a>';

export const privacyPage: LegalPage = {
  title: 'Ochrana osobných údajov',
  description:
    'Zásady spracúvania osobných údajov spoločnosťou GROWIA GROUP, s. r. o. podľa GDPR – aké údaje spracúvame, prečo, ako dlho a aké máte práva.',
  updated: '2026-11-13',
  draft: false,
  sections: [
    {
      content: [
        'Tieto zásady ochrany osobných údajov vysvetľujú, akým spôsobom spracúvame osobné údaje návštevníkov webovej stránky, záujemcov o naše služby, klientov a ďalších osôb, ktoré s nami komunikujú.',
        'Pri spracúvaní osobných údajov postupujeme v súlade s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679, všeobecné nariadenie o ochrane údajov („GDPR“), a so zákonom č. 18/2018 Z. z. o ochrane osobných údajov.',
        'Tieto zásady sú určené najmä pre webovú stránku prevádzkovateľa, prostredníctvom ktorej prezentujeme svoje služby v oblasti obchodnej podpory a získavania nových obchodných príležitostí pre firmy (B2B).',
      ],
    },
    {
      heading: '1. Prevádzkovateľ osobných údajov',
      content: [
        `Prevádzkovateľom osobných údajov je:<br>${companyBlock}`,
        `V otázkach týkajúcich sa ochrany osobných údajov nás môžete kontaktovať e-mailom na adrese ${emailLink}.`,
        'Prevádzkovateľ nemá ustanovenú zodpovednú osobu podľa GDPR. Ak sa v budúcnosti situácia zmení, kontaktné údaje zodpovednej osoby budú uvedené v týchto zásadách.',
      ],
    },
    {
      heading: '2. Základné pojmy',
      content: [
        'Na účely týchto zásad:',
        {
          list: [
            '<strong>Osobný údaj</strong> je akákoľvek informácia, ktorá sa týka identifikovanej alebo identifikovateľnej fyzickej osoby.',
            '<strong>Dotknutá osoba</strong> je fyzická osoba, ktorej osobné údaje spracúvame, napríklad návštevník webovej stránky, záujemca o konzultáciu alebo kontaktná osoba klienta.',
            '<strong>Prevádzkovateľ</strong> je osoba alebo subjekt, ktorý určuje účely a prostriedky spracúvania osobných údajov.',
            '<strong>Sprostredkovateľ</strong> je osoba alebo subjekt, ktorý spracúva osobné údaje v mene prevádzkovateľa, napríklad poskytovateľ hostingu, účtovník alebo poskytovateľ e-mailových služieb.',
            '<strong>Spracúvanie</strong> je akákoľvek operácia s osobnými údajmi, napríklad ich získavanie, zaznamenávanie, uchovávanie, používanie, zmena, vymazanie alebo prenos.',
          ],
        },
      ],
    },
    {
      heading: '3. Zásady spracúvania osobných údajov',
      content: [
        'Pri spracúvaní osobných údajov dodržiavame najmä tieto zásady:',
        {
          list: [
            'osobné údaje spracúvame zákonne, spravodlivo a transparentne,',
            'osobné údaje získavame len na konkrétne, výslovne uvedené a legitímne účely,',
            'spracúvame len také osobné údaje, ktoré sú primerané, relevantné a nevyhnutné na daný účel,',
            'dbáme na správnosť a aktuálnosť osobných údajov,',
            'osobné údaje uchovávame len počas doby nevyhnutnej na splnenie účelu spracúvania alebo počas zákonom stanovenej doby,',
            'osobné údaje chránime primeranými technickými a organizačnými opatreniami,',
            'osobné údaje nespracúvame spôsobom, ktorý by bol nezlučiteľný s účelom, na ktorý boli získané.',
          ],
        },
      ],
    },
    {
      heading: '4. Aké osobné údaje spracúvame',
      content: [
        'V závislosti od toho, akým spôsobom s nami komunikujete alebo využívate našu webovú stránku, môžeme spracúvať najmä tieto kategórie osobných údajov:',
        {
          term: 'Identifikačné údaje',
          text: 'Najmä meno a priezvisko, obchodné meno spoločnosti, ktorú zastupujete, prípadne IČO, pracovná pozícia a ďalšie údaje potrebné na vašu identifikáciu ako kontaktnej osoby.',
        },
        {
          term: 'Kontaktné údaje',
          text: 'Najmä e-mailová adresa, telefónne číslo, prípadne adresa alebo iné kontaktné údaje, ktoré nám poskytnete.',
        },
        {
          term: 'Údaje súvisiace so žiadosťou o konzultáciu',
          text: 'Najmä údaje odoslané cez formulár žiadosti o konzultáciu – meno a priezvisko, firemný e-mail, názov spoločnosti a nepovinný údaj o oblasti, v ktorej potrebujete posilniť obchodné aktivity – a ďalšie informácie, ktoré nám poskytnete pri príprave konzultácie.',
        },
        {
          term: 'Zmluvné a fakturačné údaje',
          text: 'Najmä údaje uvedené v zmluve o spolupráci, objednávke, faktúre alebo inej obchodnej dokumentácii.',
        },
        {
          term: 'Komunikačné údaje',
          text: 'Najmä obsah e-mailovej komunikácie, poznámky z telefonickej komunikácie alebo konzultácie, história komunikácie a informácie potrebné na vybavenie vašej požiadavky.',
        },
        {
          term: 'Technické údaje',
          text: 'Najmä IP adresa, typ zariadenia, typ prehliadača, operačný systém, dátum a čas návštevy webovej stránky, logy servera a súbory cookies.',
        },
      ],
    },
    {
      heading: '5. Účely a právne základy spracúvania',
      content: [
        'Osobné údaje spracúvame len vtedy, ak na to máme primeraný právny základ podľa GDPR. Nižšie uvádzame hlavné účely spracúvania.',
        { subheading: '5.1 Prevádzka webovej stránky' },
        'Osobné údaje spracúvame na účely zabezpečenia základnej funkčnosti, bezpečnosti a dostupnosti webovej stránky. Web je prevádzkovaný na infraštruktúre spoločnosti Netlify, ktorá zabezpečuje aj spracovanie odoslaných formulárov a ich ochranu proti spamu a botom.',
        'Spracúvané údaje: IP adresa, technické údaje zariadenia, serverové logy, nevyhnutné cookies. Právny základ: oprávnený záujem prevádzkovateľa na bezpečnej a funkčnej prevádzke webovej stránky. Doba uchovávania: spravidla počas doby nevyhnutnej na zabezpečenie prevádzky a bezpečnosti webu, najčastejšie niekoľko dní až mesiacov v závislosti od nastavení hostingu a bezpečnostných nástrojov.',
        { subheading: '5.2 Vybavenie žiadosti o konzultáciu a inej komunikácie' },
        'Ak nás kontaktujete prostredníctvom formulára žiadosti o konzultáciu, e-mailu, telefónu alebo iným spôsobom, spracúvame vaše údaje na účely vybavenia vašej požiadavky – najmä dohodnutia termínu úvodnej konzultácie, prípravy ponuky a odpovede na vaše otázky.',
        'Spracúvané údaje: meno a priezvisko, e-mail, názov spoločnosti, oblasť záujmu, obsah komunikácie. Právny základ: predzmluvné rokovanie, ak dopyt smeruje k uzatvoreniu zmluvy; v ostatných prípadoch oprávnený záujem na vybavení komunikácie. Doba uchovávania: počas vybavovania dopytu a následne primeranú dobu, spravidla najviac 12 mesiacov od poslednej komunikácie, ak nedôjde k uzatvoreniu zmluvy alebo nevznikne iný zákonný dôvod na dlhšie uchovávanie.',
        { subheading: '5.3 Poskytovanie služieb obchodnej podpory' },
        'Ak sa stanete naším klientom, spracúvame osobné údaje vašich kontaktných osôb potrebné na uzatvorenie a plnenie zmluvy o spolupráci – najmä na nastavenie spolupráce, priebežnú komunikáciu, reporting a vyhodnocovanie výsledkov.',
        'Spracúvané údaje: identifikačné údaje, kontaktné údaje, údaje o dohodnutom rozsahu spolupráce, zmluvná dokumentácia a komunikácia. Právny základ: plnenie zmluvy, prípadne oprávnený záujem, ak kontaktná osoba nie je zmluvnou stranou. Doba uchovávania: počas trvania zmluvného vzťahu a následne počas doby potrebnej na ochranu právnych nárokov, spravidla 3 až 5 rokov, ak právne predpisy nevyžadujú dlhšiu dobu uchovávania.',
        { subheading: '5.4 Fakturácia a účtovníctvo' },
        'Osobné údaje spracúvame aj na účely vystavenia dokladov, vedenia účtovníctva, plnenia daňových povinností a archivácie účtovných dokladov.',
        'Spracúvané údaje: meno a priezvisko, obchodné meno, adresa, IČO, DIČ, údaje o poskytnutej službe, platobné údaje a údaje uvedené na účtovných dokladoch. Právny základ: plnenie zákonnej povinnosti. Doba uchovávania: počas doby stanovenej príslušnými účtovnými a daňovými právnymi predpismi.',
        { subheading: '5.5 Ochrana právnych nárokov' },
        'Osobné údaje môžeme spracúvať aj na účely ochrany našich práv, riešenia sporov, vymáhania pohľadávok, preukazovania splnenia povinností alebo obhajoby právnych nárokov.',
        'Spracúvané údaje: údaje zo zmluvnej, fakturačnej a komunikačnej dokumentácie. Právny základ: oprávnený záujem prevádzkovateľa na ochrane právnych nárokov. Doba uchovávania: počas trvania príslušných premlčacích lehôt alebo počas trvania súdneho, správneho či iného konania.',
        { subheading: '5.6 Marketing, analytika a reklama' },
        'Newsletter ani inú priamu marketingovú komunikáciu v súčasnosti nevyužívame a osobné údaje na tento účel nespracúvame.',
        'Na webovej stránke používame nástroj Google Tag Manager, prostredníctvom ktorého môžu byť po udelení vášho súhlasu načítané analytické nástroje (meranie návštevnosti a používania webu) a marketingové nástroje (meranie účinnosti kampaní a zobrazovanie relevantnej reklamy). Bez vášho súhlasu sa tieto nástroje neaktivujú a nespracúvajú žiadne údaje.',
        'Spracúvané údaje: technické údaje zariadenia, identifikátory cookies, informácie o správaní na webe. Právny základ: váš súhlas, ktorý môžete kedykoľvek odvolať prostredníctvom nastavení cookies. Doba uchovávania: podľa životnosti jednotlivých cookies uvedenej na stránke <a href="/zasady-cookies">Zásady cookies</a>.',
      ],
    },
    {
      heading: '6. Súbory cookies a podobné technológie',
      content: [
        'Na našej webovej stránke používame cookies a podobné technológie. Cookies sú malé textové súbory, ktoré sa ukladajú vo vašom zariadení pri návšteve webovej stránky.',
        'Používame tieto kategórie cookies:',
        {
          term: 'Nevyhnutné cookies',
          text: 'Sú potrebné na základné fungovanie webovej stránky a jej bezpečnosť – najmä na uloženie vašich preferencií cookies. Na ich používanie sa nevyžaduje súhlas.',
        },
        {
          term: 'Analytické cookies',
          text: 'Pomáhajú nám pochopiť, ako návštevníci web používajú, aby sme ho mohli zlepšovať. Používame ich len na základe vášho súhlasu.',
        },
        {
          term: 'Marketingové cookies',
          text: 'Používajú sa na meranie účinnosti kampaní a zobrazovanie relevantnej reklamy. Používame ich len na základe vášho súhlasu.',
        },
        'Pri prvej návšteve webovej stránky sa vám zobrazí cookie lišta, prostredníctvom ktorej môžete udeliť alebo odmietnuť súhlas s používaním voliteľných cookies. Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať prostredníctvom odkazu „Nastavenia cookies“ v pätičke webu. Podrobnejšie informácie o konkrétnych cookies, ich účele a dobe uchovávania nájdete na stránke <a href="/zasady-cookies">Zásady cookies</a>.',
      ],
    },
    {
      heading: '7. Príjemcovia a sprostredkovatelia osobných údajov',
      content: [
        'Osobné údaje neposkytujeme tretím osobám, pokiaľ to nie je nevyhnutné na splnenie účelu spracúvania, plnenie zákonnej povinnosti alebo ochranu našich oprávnených záujmov.',
        'Osobné údaje môžu byť sprístupnené najmä týmto kategóriám príjemcov:',
        {
          list: [
            '<strong>Netlify, Inc.</strong> – poskytovateľ hostingu webovej stránky a spracovania odoslaných formulárov (Netlify Forms),',
            '<strong>Google</strong> (Google Ireland Ltd.) – poskytovateľ nástroja Google Tag Manager a s vaším súhlasom aj analytických a reklamných nástrojov,',
            '<strong>Adobe</strong> (Adobe Systems Software Ireland Ltd.) – poskytovateľ webových písiem (Adobe Fonts), ktoré sa načítavajú pri zobrazení webu,',
            'poskytovateľ e-mailových a kancelárskych služieb,',
            'účtovník alebo poskytovateľ účtovných služieb,',
            'právny, daňový alebo iný odborný poradca,',
            'orgány verejnej moci, ak to vyžaduje zákon alebo oprávnená žiadosť.',
          ],
        },
        'S osobami, ktoré spracúvajú osobné údaje v našom mene, uzatvárame zmluvy o spracúvaní osobných údajov, ak to vyžaduje GDPR. Konkrétni poskytovatelia služieb sa môžu meniť podľa aktuálne používaných technických a obchodných riešení.',
      ],
    },
    {
      heading: '8. Prenos osobných údajov mimo EÚ/EHP',
      content: [
        'Osobné údaje sa snažíme spracúvať prednostne v rámci Európskej únie alebo Európskeho hospodárskeho priestoru.',
        'Pri používaní služieb spoločností Netlify, Google a Adobe môže dochádzať k prenosu osobných údajov mimo EÚ/EHP, najmä do USA. Takýto prenos sa uskutočňuje len v súlade s GDPR, pričom sa spoliehame najmä na:',
        {
          list: [
            'rozhodnutie Európskej komisie o primeranosti ochrany (EU-U.S. Data Privacy Framework),',
            'štandardné zmluvné doložky,',
            'doplnkové technické a organizačné opatrenia,',
            'alebo iný právny mechanizmus podľa GDPR.',
          ],
        },
      ],
    },
    {
      heading: '9. Doba uchovávania osobných údajov',
      content: [
        'Osobné údaje uchovávame len počas doby nevyhnutnej na splnenie účelu, na ktorý boli získané, alebo počas doby stanovenej právnymi predpismi.',
        'Orientačné doby uchovávania sú:',
        {
          list: [
            'údaje zo žiadosti o konzultáciu: spravidla najviac 12 mesiacov od poslednej komunikácie, ak nedôjde k uzatvoreniu zmluvy,',
            'údaje klientov potrebné na plnenie zmluvy: počas trvania zmluvného vzťahu a následne počas doby potrebnej na ochranu právnych nárokov,',
            'účtovné a daňové doklady: počas zákonom stanovenej archivačnej doby,',
            'technické a bezpečnostné logy: spravidla niekoľko dní až mesiacov podľa nastavenia technických systémov,',
            'cookies: podľa životnosti jednotlivých cookies uvedenej na stránke <a href="/zasady-cookies">Zásady cookies</a>.',
          ],
        },
        'Po uplynutí doby uchovávania osobné údaje vymažeme, anonymizujeme alebo bezpečne zlikvidujeme, ak neexistuje iný právny dôvod na ich ďalšie spracúvanie.',
      ],
    },
    {
      heading: '10. Práva dotknutých osôb',
      content: [
        'Ako dotknutá osoba máte v súvislosti so spracúvaním osobných údajov tieto práva:',
        {
          term: 'Právo na prístup k osobným údajom',
          text: 'Máte právo získať potvrdenie o tom, či spracúvame vaše osobné údaje, a ak áno, máte právo získať prístup k týmto údajom a informáciám o ich spracúvaní.',
        },
        {
          term: 'Právo na opravu',
          text: 'Máte právo požadovať opravu nesprávnych alebo neúplných osobných údajov, ktoré sa vás týkajú.',
        },
        {
          term: 'Právo na výmaz',
          text: 'Máte právo požadovať vymazanie osobných údajov, ak sú splnené podmienky podľa GDPR, napríklad ak už údaje nie sú potrebné na účel, na ktorý boli získané, alebo ak odvoláte súhlas a neexistuje iný právny základ spracúvania.',
        },
        {
          term: 'Právo na obmedzenie spracúvania',
          text: 'Máte právo požadovať obmedzenie spracúvania osobných údajov v prípadoch stanovených GDPR.',
        },
        {
          term: 'Právo na prenosnosť údajov',
          text: 'Ak je spracúvanie založené na súhlase alebo zmluve a vykonáva sa automatizovanými prostriedkami, máte právo získať osobné údaje v štruktúrovanom, bežne používanom a strojovo čitateľnom formáte a preniesť ich k inému prevádzkovateľovi.',
        },
        {
          term: 'Právo namietať',
          text: 'Máte právo namietať proti spracúvaniu osobných údajov, ktoré je založené na oprávnenom záujme. Máte tiež právo kedykoľvek namietať proti spracúvaniu osobných údajov na účely priameho marketingu.',
        },
        {
          term: 'Právo odvolať súhlas',
          text: 'Ak spracúvame osobné údaje na základe vášho súhlasu, máte právo súhlas kedykoľvek odvolať. Odvolanie súhlasu nemá vplyv na zákonnosť spracúvania vykonaného pred jeho odvolaním.',
        },
        {
          term: 'Právo podať sťažnosť',
          text: `Ak sa domnievate, že pri spracúvaní vašich osobných údajov došlo k porušeniu právnych predpisov, máte právo podať sťažnosť dozornému orgánu:<br>${authorityBlock}`,
        },
      ],
    },
    {
      heading: '11. Ako môžete uplatniť svoje práva',
      content: [
        `Svoje práva môžete uplatniť zaslaním žiadosti na e-mailovú adresu ${emailLink} alebo písomne na adresu sídla prevádzkovateľa.`,
        'Na vašu žiadosť odpovieme bez zbytočného odkladu, najneskôr v lehote jedného mesiaca od jej doručenia. V odôvodnených prípadoch môže byť táto lehota predĺžená o ďalšie dva mesiace, o čom vás budeme informovať.',
        'Ak budeme mať pochybnosti o vašej totožnosti, môžeme vás požiadať o poskytnutie dodatočných informácií potrebných na jej overenie.',
      ],
    },
    {
      heading: '12. Povinnosť poskytnúť osobné údaje',
      content: [
        'Poskytnutie osobných údajov pri odoslaní žiadosti o konzultáciu je dobrovoľné. Bez poskytnutia základných kontaktných údajov však nebudeme schopní odpovedať na vašu žiadosť ani dohodnúť termín konzultácie.',
        'Ak ide o údaje potrebné na uzatvorenie a plnenie zmluvy o spolupráci, ich poskytnutie môže byť zmluvnou požiadavkou. Bez týchto údajov nemusí byť možné zmluvu uzatvoriť alebo riadne plniť.',
        'Ak ide o údaje potrebné na vystavenie dokladu alebo splnenie účtovných a daňových povinností, ich spracúvanie je zákonnou požiadavkou.',
      ],
    },
    {
      heading: '13. Automatizované rozhodovanie a profilovanie',
      content: [
        'Nevykonávame automatizované individuálne rozhodovanie ani profilovanie, ktoré by malo voči dotknutej osobe právne účinky alebo obdobne významný vplyv.',
        'Ak by sme v budúcnosti používali nástroje, ktoré zahŕňajú profilovanie alebo automatizované rozhodovanie, budeme vás o tom informovať vopred a v súlade s GDPR.',
      ],
    },
    {
      heading: '14. Bezpečnosť osobných údajov',
      content: [
        'Prijímame primerané technické a organizačné opatrenia na ochranu osobných údajov pred neoprávneným prístupom, stratou, zneužitím, zničením, poškodením alebo neoprávneným zverejnením.',
        'Medzi tieto opatrenia patria najmä:',
        {
          list: [
            'používanie zabezpečeného pripojenia HTTPS,',
            'ochrana formulára proti spamu a zneužitiu,',
            'obmedzenie prístupu k osobným údajom len na oprávnené osoby,',
            'používanie silných hesiel a viacfaktorovej autentifikácie tam, kde je to vhodné,',
            'aktualizácia softvéru a bezpečnostných prvkov,',
            'primerané zabezpečenie zariadení a účtov,',
            'výber dôveryhodných poskytovateľov technických služieb.',
          ],
        },
        'Napriek prijatým opatreniam nie je možné zaručiť absolútnu bezpečnosť prenosu údajov cez internet. Robíme však všetko primerané na to, aby boli vaše osobné údaje chránené.',
      ],
    },
    {
      heading: '15. Porušenie ochrany osobných údajov',
      content: [
        'Ak dôjde k porušeniu ochrany osobných údajov, ktoré pravdepodobne povedie k riziku pre práva a slobody fyzických osôb, oznámime túto skutočnosť Úradu na ochranu osobných údajov Slovenskej republiky bez zbytočného odkladu, spravidla najneskôr do 72 hodín od zistenia porušenia.',
        'Ak je pravdepodobné, že porušenie ochrany osobných údajov povedie k vysokému riziku pre práva a slobody dotknutých osôb, budeme o tom informovať aj dotknuté osoby, ak sa neuplatní niektorá z výnimiek podľa GDPR.',
      ],
    },
    {
      heading: '16. Osobné údaje detí',
      content: [
        'Naše služby sú určené firmám a naša webová stránka nie je určená osobám mladším ako 16 rokov. Vedome nezískavame osobné údaje detí.',
        'Ak zistíme, že spracúvame osobné údaje dieťaťa bez potrebného právneho základu, prijmeme primerané opatrenia na ich vymazanie.',
      ],
    },
    {
      heading: '17. Odkazy na webové stránky tretích strán',
      content: [
        'Naša webová stránka môže obsahovať odkazy na webové stránky tretích strán. Za spracúvanie osobných údajov na týchto webových stránkach zodpovedajú ich prevádzkovatelia. Odporúčame, aby ste sa oboznámili s ich zásadami ochrany osobných údajov.',
      ],
    },
    {
      heading: '18. Zmeny týchto zásad',
      content: [
        'Tieto zásady môžeme z času na čas aktualizovať, najmä ak dôjde k zmene právnych predpisov, používaných technológií, rozsahu spracúvania osobných údajov alebo našich služieb.',
        'Aktuálna verzia zásad bude vždy dostupná na našej webovej stránke. Pri podstatných zmenách vás môžeme informovať primeraným spôsobom, napríklad oznámením na webovej stránke.',
      ],
    },
    {
      heading: '19. Kontaktné údaje a dozorný orgán',
      content: [
        `V prípade otázok týkajúcich sa ochrany osobných údajov nás môžete kontaktovať:<br>${companyBlock}`,
        `Dozorným orgánom je:<br>${authorityBlock}`,
        'Tieto zásady ochrany osobných údajov sú platné od 13. 11. 2026.',
      ],
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
      content: ['Text sa pripravuje. Krátke vysvetlenie, čo sú súbory cookies a na čo slúžia.'],
    },
    {
      heading: 'Aké cookies používame',
      content: [
        'Text sa pripravuje. Kategórie: nevyhnutné (uloženie súhlasu), analytické a marketingové (načítavané cez Google Tag Manager až po udelení súhlasu).',
      ],
    },
    {
      heading: 'Ako zmeniť nastavenia',
      content: [
        'Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať tlačidlom nižšie alebo v nastaveniach prehliadača.',
      ],
    },
  ],
};
