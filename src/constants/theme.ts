/**
 * Design tokens that mirror the @theme block in src/index.css.
 * Use these constants when you need colour/font values in TS/JS logic
 * (e.g. inline styles, canvas rendering). For Tailwind classes, rely on
 * the CSS custom properties directly.
 */

export const COLORS = {
  primary: '#BB831C',
  onPrimary: '#000000',
  secondary: '#3F4628',
  onSecondary: '#ffffff',
  background: '#0A0A0A',
  surface: '#131313',
  surfaceContainer: '#1b1b1b',
  surfaceContainerHigh: '#242424',
  surfaceContainerHighest: '#353535',
  onSurface: '#e2e2e2',
  onSurfaceVariant: '#d5c4b0',
  outlineVariant: 'rgba(213, 196, 176, 0.15)',
} as const;

export const FONTS = {
  headline: '"Newsreader", serif',
  body: '"Space Grotesk", sans-serif',
  label: '"Space Grotesk", monospace',
} as const;

/** Tailwind-compatible responsive breakpoints. */
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type Color = keyof typeof COLORS;
export type Font = keyof typeof FONTS;
export type Breakpoint = keyof typeof BREAKPOINTS;
