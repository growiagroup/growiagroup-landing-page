import { site } from '@/config/site';
import { faq } from '@/data/faq';

/** Odstráni HTML značky a nedeliteľné medzery z textu pre JSON-LD. */
export function plainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/ /g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function organizationSchema(description: string) {
  const contactPoint = site.contact.email
    ? {
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: site.contact.email,
            ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
            availableLanguage: ['sk'],
          },
        ],
      }
    : {};

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    legalName: site.company.legalName || undefined,
    url: site.url,
    logo: new URL('/og-image.png', site.url).href,
    description,
    slogan: site.tagline,
    areaServed: 'SK',
    ...contactPoint,
  };
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: plainText(item.question),
      acceptedAnswer: { '@type': 'Answer', text: plainText(item.answer) },
    })),
  };
}

export function webPageSchema(title: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: new URL(path, site.url).href,
    inLanguage: site.lang,
    isPartOf: { '@type': 'WebSite', name: site.name, url: site.url },
  };
}
