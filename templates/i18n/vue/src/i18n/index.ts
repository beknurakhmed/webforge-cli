import { ref, computed } from 'vue';

const translations: Record<string, Record<string, string>> = {
  en: { welcome: 'Welcome', about: 'About', home: 'Home', switchLang: 'Language' },
  ru: { welcome: 'Добро пожаловать', about: 'О нас', home: 'Главная', switchLang: 'Язык' },
  uz: { welcome: 'Xush kelibsiz', about: 'Biz haqimizda', home: 'Bosh sahifa', switchLang: 'Til' },
};

export const languages = ['en', 'ru', 'uz'] as const;
export type Lang = (typeof languages)[number];

const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') as Lang : null;
const currentLang = ref<Lang>(stored && languages.includes(stored) ? stored : 'en');

export function useI18n() {
  const t = (key: string) => translations[currentLang.value]?.[key] || translations.en[key] || key;

  const switchLang = (lang: Lang) => {
    currentLang.value = lang;
    if (typeof window !== 'undefined') localStorage.setItem('lang', lang);
  };

  return { lang: computed(() => currentLang.value), t, switchLang, languages };
}
