export type valueOf<T> = T[keyof T];

export const THEME_KEY = {
  light: 'light',
  dark: 'dark'
} as const;

export type ThemeKey = valueOf<typeof THEME_KEY>;
