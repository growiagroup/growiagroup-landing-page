import { describe, expect, it } from 'vitest';
import { consultation } from '@/data/consultation';
import { isValid, validateForm } from './validateForm';

const m = consultation.form.fields;
const valid = { name: 'Jana Nováková', email: 'jana@firma.sk', company: 'Firma s.r.o.' };

describe('validateForm', () => {
  it('accepts a complete, well-formed submission', () => {
    const errors = validateForm(valid);
    expect(errors).toEqual({});
    expect(isValid(errors)).toBe(true);
  });

  it('rejects empty and whitespace-only name/company', () => {
    expect(validateForm({ ...valid, name: '' }).name).toBe(m.name.error);
    expect(validateForm({ ...valid, name: '   ' }).name).toBe(m.name.error);
    expect(validateForm({ ...valid, name: 'J' }).name).toBe(m.name.error);
    expect(validateForm({ ...valid, company: ' ' }).company).toBe(m.company.error);
  });

  it('distinguishes empty email from malformed email', () => {
    expect(validateForm({ ...valid, email: '' }).email).toBe(m.email.errorEmpty);
    expect(validateForm({ ...valid, email: '   ' }).email).toBe(m.email.errorEmpty);
    expect(validateForm({ ...valid, email: 'meno@firma' }).email).toBe(m.email.errorFormat);
    expect(validateForm({ ...valid, email: 'meno firma.sk' }).email).toBe(m.email.errorFormat);
    expect(validateForm({ ...valid, email: 'meno@firma.s' }).email).toBe(m.email.errorFormat);
  });

  it('accepts email with surrounding whitespace and subdomains', () => {
    expect(validateForm({ ...valid, email: '  meno@mail.firma.sk ' })).toEqual({});
  });

  it('reports all invalid fields at once', () => {
    const errors = validateForm({ name: '', email: 'meno@firma', company: '' });
    expect(Object.keys(errors).sort()).toEqual(['company', 'email', 'name']);
    expect(isValid(errors)).toBe(false);
  });
});
