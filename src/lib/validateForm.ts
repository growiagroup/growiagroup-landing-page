import { consultation } from '@/data/consultation';

export interface FormValues {
  name: string;
  email: string;
  company: string;
}

export type FormField = keyof FormValues;
export type FormErrors = Partial<Record<FormField, string>>;

export const FORM_FIELDS: readonly FormField[] = ['name', 'email', 'company'];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const messages = consultation.form.fields;

/** Overí povinné polia; vráti objekt chýb (prázdny = všetko v poriadku). */
export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) errors.name = messages.name.error;

  const email = values.email.trim();
  if (!email) errors.email = messages.email.errorEmpty;
  else if (!EMAIL_PATTERN.test(email)) errors.email = messages.email.errorFormat;

  if (values.company.trim().length < 2) errors.company = messages.company.error;

  return errors;
}

export function isValid(errors: FormErrors): boolean {
  return Object.keys(errors).length === 0;
}
