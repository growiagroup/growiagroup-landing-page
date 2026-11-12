/**
 * Prepojenie kategórií cookie lišty na Google Consent Mode v2.
 * Kategórie: necessary (vždy), analytics, marketing.
 */
export type ConsentState = 'granted' | 'denied';

export interface GoogleConsent {
  ad_storage: ConsentState;
  ad_user_data: ConsentState;
  ad_personalization: ConsentState;
  analytics_storage: ConsentState;
  functionality_storage: ConsentState;
  personalization_storage: ConsentState;
  security_storage: ConsentState;
}

export const CONSENT_DEFAULTS: GoogleConsent = {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted',
};

export function consentFromCategories(categories: readonly string[]): GoogleConsent {
  const analytics = categories.includes('analytics') ? 'granted' : 'denied';
  const marketing = categories.includes('marketing') ? 'granted' : 'denied';
  return {
    ...CONSENT_DEFAULTS,
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    personalization_storage: marketing,
  };
}
