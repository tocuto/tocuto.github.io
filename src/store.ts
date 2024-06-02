import { writable, type Writable } from "svelte/store";

export const locales = {
  en: "English",
  es: "Español",
} as const;
export type Locale = keyof typeof locales;

const getDefaultLang = (): Locale => {
  const pref = [navigator.language, ...navigator.languages];
  for (let i = 0; i < pref.length; i++) {
    const locale = pref[i].split("-", 1)[0] as Locale;
    if (!!locales[locale]) {
      return locale;
    }
  }
  return "en";
};
export const defaultLang: Locale = getDefaultLang();
export const lang: Writable<Locale> = writable(defaultLang);
