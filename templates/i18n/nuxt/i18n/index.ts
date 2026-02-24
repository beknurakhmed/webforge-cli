const translations: Record<string, Record<string, string>> = {
  en: { welcome: 'Welcome', about: 'About', home: 'Home', switchLang: 'Language' },
  ru: { welcome: 'Добро пожаловать', about: 'О нас', home: 'Главная', switchLang: 'Язык' },
  uz: { welcome: 'Xush kelibsiz', about: 'Biz haqimizda', home: 'Bosh sahifa', switchLang: 'Til' },
};

export const languages = ['en', 'ru', 'uz'] as const;
export type Lang = (typeof languages)[number];

export function createI18n() {
  const lang = ref<Lang>('en');

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('lang') as Lang;
    if (saved && languages.includes(saved)) lang.value = saved;
  }

  const t = (key: string) => translations[lang.value]?.[key] || translations.en[key] || key;

  const switchLang = (newLang: Lang) => {
    lang.value = newLang;
    if (typeof window !== 'undefined') localStorage.setItem('lang', newLang);
  };

  return { lang, t, switchLang, languages };
}
