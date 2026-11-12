/**
 * TT Ricordi Allegria je licencovaný font, ktorý sa dodáva ručne do `public/fonts/`.
 * Táto funkcia pri builde zistí, ktoré súbory existujú, a vygeneruje pre ne @font-face.
 * Kým súbory chýbajú, nevznikne žiadny 404 a prehliadač použije Marcellus.
 *
 * Očakávané názvy súborov (woff2): TTRicordiAllegria-<Rez>.woff2
 * kde <Rez> je Regular | Medium | DemiBold | SemiBold | Bold.
 */
const WEIGHTS: Record<string, number> = {
  regular: 400,
  medium: 500,
  demibold: 600,
  semibold: 600,
  bold: 700,
};

export function weightFromFileName(fileName: string): number | null {
  const match = /TTRicordiAllegria-([A-Za-z]+)\.woff2$/.exec(fileName);
  if (!match) return null;
  const style = match[1]!.toLowerCase();
  return WEIGHTS[style] ?? null;
}

export function fontFaceCss(publicPaths: string[]): string {
  return publicPaths
    .map((path) => {
      const weight = weightFromFileName(path);
      if (weight === null) return '';
      const url = path.replace(/^\/?public/, '');
      return `@font-face{font-family:"TT Ricordi Allegria";font-style:normal;font-weight:${weight};font-display:swap;src:url("${url}") format("woff2")}`;
    })
    .filter(Boolean)
    .join('\n');
}

/** Zoznam dodaných súborov fontu – vyhodnotené pri builde. */
export function availableHeadingFonts(): string[] {
  const files = import.meta.glob('/public/fonts/*.woff2', { eager: true, query: '?url', import: 'default' });
  return Object.keys(files);
}
