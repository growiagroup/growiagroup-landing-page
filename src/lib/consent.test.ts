import { describe, expect, it } from 'vitest';
import { CONSENT_DEFAULTS, consentFromCategories } from './consent';

describe('consentFromCategories', () => {
  it('denies everything optional when only necessary is accepted', () => {
    expect(consentFromCategories(['necessary'])).toEqual(CONSENT_DEFAULTS);
  });

  it('grants analytics_storage only for analytics', () => {
    const c = consentFromCategories(['necessary', 'analytics']);
    expect(c.analytics_storage).toBe('granted');
    expect(c.ad_storage).toBe('denied');
    expect(c.ad_user_data).toBe('denied');
  });

  it('grants ad signals only for marketing', () => {
    const c = consentFromCategories(['necessary', 'marketing']);
    expect(c.analytics_storage).toBe('denied');
    expect(c.ad_storage).toBe('granted');
    expect(c.ad_user_data).toBe('granted');
    expect(c.ad_personalization).toBe('granted');
    expect(c.personalization_storage).toBe('granted');
  });

  it('always keeps security and functionality granted', () => {
    const c = consentFromCategories([]);
    expect(c.security_storage).toBe('granted');
    expect(c.functionality_storage).toBe('granted');
  });
});
