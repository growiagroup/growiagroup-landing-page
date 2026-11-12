/** Minimalistický helper pre Google Tag Manager dataLayer. */

export interface GenerateLeadEvent {
  event: 'generate_lead';
  form_name: string;
  challenge: string;
}

type DataLayerWindow = { dataLayer?: unknown[] };

export function buildGenerateLead(formName: string, challenge: string | null | undefined): GenerateLeadEvent {
  return {
    event: 'generate_lead',
    form_name: formName,
    challenge: challenge && challenge.trim() ? challenge.trim() : 'neuvedene',
  };
}

/** Pošle event do dataLayer. Ak dataLayer neexistuje (GTM nenačítaný), vytvorí ho. */
export function pushGenerateLead(
  formName: string,
  challenge: string | null | undefined,
  win: DataLayerWindow = globalThis as DataLayerWindow,
): GenerateLeadEvent {
  const payload = buildGenerateLead(formName, challenge);
  win.dataLayer = win.dataLayer ?? [];
  win.dataLayer.push(payload);
  return payload;
}
