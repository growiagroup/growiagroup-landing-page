import { describe, expect, it } from 'vitest';
import { faq } from '@/data/faq';
import { faqSchema, organizationSchema, plainText } from './structuredData';

describe('plainText', () => {
  it('strips tags and non-breaking spaces', () => {
    expect(plainText('Ahoj<br />svet&nbsp;a b')).toBe('Ahoj svet&nbsp;a b');
    expect(plainText('  a   b ')).toBe('a b');
  });
});

describe('faqSchema', () => {
  it('maps every FAQ item to a Question with an Answer', () => {
    const schema = faqSchema();
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toHaveLength(faq.items.length);
    expect(schema.mainEntity[0]).toMatchObject({ '@type': 'Question', name: faq.items[0]!.question });
    expect(schema.mainEntity[0]!.acceptedAnswer.text).not.toContain(' ');
  });
});

describe('organizationSchema', () => {
  it('omits contact point when no e-mail is configured', () => {
    const schema = organizationSchema('popis');
    expect(schema.name).toBe('Growia Group');
    expect(schema.url).toBe('https://go.growiagroup.sk');
    expect('contactPoint' in schema).toBe(false);
  });
});
