import { describe, expect, it } from 'vitest';
import { buildGenerateLead, pushGenerateLead } from './dataLayer';

describe('buildGenerateLead', () => {
  it('uses the chosen challenge', () => {
    expect(buildGenerateLead('konzultacia', 'vstup-na-novy-trh')).toEqual({
      event: 'generate_lead',
      form_name: 'konzultacia',
      challenge: 'vstup-na-novy-trh',
    });
  });

  it('falls back when no challenge was selected', () => {
    expect(buildGenerateLead('konzultacia', null).challenge).toBe('neuvedene');
    expect(buildGenerateLead('konzultacia', '  ').challenge).toBe('neuvedene');
  });
});

describe('pushGenerateLead', () => {
  it('pushes into an existing dataLayer', () => {
    const win = { dataLayer: [{ event: 'gtm.js' }] as unknown[] };
    pushGenerateLead('konzultacia', 'ine', win);
    expect(win.dataLayer).toHaveLength(2);
    expect(win.dataLayer[1]).toMatchObject({ event: 'generate_lead', challenge: 'ine' });
  });

  it('creates dataLayer when GTM has not initialised it', () => {
    const win: { dataLayer?: unknown[] } = {};
    pushGenerateLead('konzultacia', undefined, win);
    expect(win.dataLayer).toEqual([{ event: 'generate_lead', form_name: 'konzultacia', challenge: 'neuvedene' }]);
  });
});
