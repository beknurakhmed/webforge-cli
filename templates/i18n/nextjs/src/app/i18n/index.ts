'use client';

import { useState, useCallback } from 'react';

const translations: Record<string, Record<string, string>> = {
  en: { welcome: 'Welcome', about: 'About', home: 'Home', switchLang: 'Language' },
  ru: { welcome: 'Добро пожаловать', about: 'О нас', home: 'Главная', switchLang: 'Язык' },
  uz: { welcome: 'Xush kelibsiz', about: 'Biz haqimizda', home: 'Bosh sahifa', switchLang: 'Til' },
};

export const languages = ['en', 'ru', 'uz'] as const;
export type Lang = (typeof languages)[number];

export function useI18n() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang') as Lang;
      if (saved && languages.includes(saved)) return saved;
    }
    return 'en';
  });

  const t = useCallback((key: string) => translations[lang]?.[key] || translations.en[key] || key, [lang]);

  const switchLang = useCallback((newLang: Lang) => {
    setLang(newLang);
    if (typeof window !== 'undefined') localStorage.setItem('lang', newLang);
  }, []);

  return { lang, t, switchLang, languages };
}
