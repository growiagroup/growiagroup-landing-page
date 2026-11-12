export interface ChallengeOption {
  value: string;
  label: string;
}

export const consultation = {
  eyebrow: 'Úvodná konzultácia',
  title: 'Prejdime si vaše obchodné ciele',
  lead: 'Na nezáväznej úvodnej konzultácii si prejdeme vašu ponuku, cieľových zákazníkov a možnosti spolupráce.',
  form: {
    /** Názov formulára v Netlify (Forms → konzultacia). */
    name: 'konzultacia',
    title: 'Žiadosť o konzultáciu',
    requiredNote: 'Polia označené hviezdičkou (*) sú povinné.',
    fields: {
      name: { label: 'Meno a priezvisko', error: 'Zadajte meno a priezvisko.' },
      email: {
        label: 'Firemný e-mail',
        hint: 'E-mail, na ktorom vás zastihneme v pracovnej veci.',
        errorEmpty: 'Zadajte e-mail, na ktorom vás zastihneme.',
        errorFormat:
          'E-mail nemá správny tvar. Skontrolujte, či obsahuje @ a doménu, napríklad meno@firma.sk.',
      },
      company: { label: 'Názov spoločnosti', error: 'Zadajte názov spoločnosti.' },
      challenge: {
        legend: 'V ktorej oblasti potrebujete posilniť obchodné aktivity?',
        optionalNote: '(nepovinné)',
      },
      challengeOther: { label: 'Akú oblasť máte na mysli?', optionalNote: '(nepovinné)' },
    },
    challenges: [
      { value: 'ziskavanie-novych-zakaznikov', label: 'Získavanie nových zákazníkov' },
      { value: 'nedostatok-kapacit-na-akviziciu', label: 'Nedostatok kapacít na akvizíciu' },
      { value: 'rozsirenie-databazy', label: 'Rozšírenie databázy' },
      { value: 'vstup-na-novy-trh', label: 'Vstup na nový trh' },
      { value: 'posilnenie-obchodneho-timu', label: 'Posilnenie existujúceho obchodného tímu' },
      { value: 'ine', label: 'Iné' },
    ] satisfies ChallengeOption[],
    /** Hodnota voľby, ktorá zobrazí doplňujúce textové pole. */
    otherValue: 'ine',
    summaryTitle: 'Skontrolujte, prosím, tieto polia:',
    submit: 'Odoslať žiadosť o konzultáciu',
    submitting: 'Odosielame…',
    afterSubmitNote:
      'Po odoslaní formulára vás budeme kontaktovať a dohodneme si termín úvodnej konzultácie.',
    privacyNote: 'Osobné údaje použijeme na vybavenie vašej žiadosti. Viac v dokumente',
    privacyLinkLabel: 'Informácie o spracúvaní osobných údajov',
    serverError:
      'Vaše údaje zostali vo formulári. Skúste to, prosím, znova o chvíľu.',
    serverErrorTitle: 'Žiadosť sa nepodarilo odoslať.',
    success: {
      title: 'Ďakujeme, žiadosť sme prijali',
      text: 'Budeme vás kontaktovať a dohodneme si termín úvodnej konzultácie.',
    },
  },
} as const;
