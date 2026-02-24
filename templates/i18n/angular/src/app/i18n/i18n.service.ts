import { Injectable, signal } from '@angular/core';

const translations: Record<string, Record<string, string>> = {
  en: { welcome: 'Welcome', about: 'About', home: 'Home', switchLang: 'Language' },
  ru: { welcome: 'Добро пожаловать', about: 'О нас', home: 'Главная', switchLang: 'Язык' },
  uz: { welcome: 'Xush kelibsiz', about: 'Biz haqimizda', home: 'Bosh sahifa', switchLang: 'Til' },
};

export const languages = ['en', 'ru', 'uz'] as const;
export type Lang = (typeof languages)[number];

@Injectable({ providedIn: 'root' })
export class I18nService {
  lang = signal<Lang>(this.detectLang());

  t(key: string): string {
    return translations[this.lang()]?.[key] || translations['en'][key] || key;
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
    if (typeof localStorage !== 'undefined') localStorage.setItem('lang', lang);
  }

  private detectLang(): Lang {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('lang') as Lang;
      if (saved && languages.includes(saved)) return saved;
    }
    return 'en';
  }
}
