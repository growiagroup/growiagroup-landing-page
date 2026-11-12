import { describe, expect, it } from 'vitest';
import { fontFaceCss, weightFromFileName } from './headingFont';

describe('weightFromFileName', () => {
  it('maps known styles to weights', () => {
    expect(weightFromFileName('/public/fonts/TTRicordiAllegria-Medium.woff2')).toBe(500);
    expect(weightFromFileName('/public/fonts/TTRicordiAllegria-DemiBold.woff2')).toBe(600);
    expect(weightFromFileName('/public/fonts/TTRicordiAllegria-Regular.woff2')).toBe(400);
  });

  it('returns null for unknown files', () => {
    expect(weightFromFileName('/public/fonts/Other.woff2')).toBeNull();
    expect(weightFromFileName('/public/fonts/TTRicordiAllegria-Fancy.woff2')).toBeNull();
  });
});

describe('fontFaceCss', () => {
  it('produces one @font-face per known file with a public URL', () => {
    const css = fontFaceCss(['/public/fonts/TTRicordiAllegria-Medium.woff2']);
    expect(css).toContain('font-weight:500');
    expect(css).toContain('url("/fonts/TTRicordiAllegria-Medium.woff2")');
    expect(css).not.toContain('/public/');
  });

  it('returns empty string when no files are present', () => {
    expect(fontFaceCss([])).toBe('');
  });
});
