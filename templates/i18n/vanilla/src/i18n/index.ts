const translations: Record<string, Record<string, string>> = {
  en: { welcome: 'Welcome', about: 'About', home: 'Home', switchLang: 'Language' },
  ru: { welcome: 'Добро пожаловать', about: 'О нас', home: 'Главная', switchLang: 'Язык' },
  uz: { welcome: 'Xush kelibsiz', about: 'Biz haqimizda', home: 'Bosh sahifa', switchLang: 'Til' },
};

export const languages = ['en', 'ru', 'uz'] as const;
export type Lang = (typeof languages)[number];

let currentLang: Lang = 'en';
const listeners = new Set<() => void>();

const saved = localStorage.getItem('lang') as Lang;
if (saved && languages.includes(saved)) currentLang = saved;

export function t(key: string): string {
  return translations[currentLang]?.[key] || translations.en[key] || key;
}

export function getLang(): Lang {
  return currentLang;
}

export function setLang(lang: Lang): void {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  listeners.forEach((fn) => fn());
}

export function onLangChange(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function renderLangSwitcher(container: HTMLElement): void {
  const render = () => {
    container.innerHTML = languages
      .map((l) => `<button class="lang-btn${l === currentLang ? ' active' : ''}" data-lang="${l}">${l.toUpperCase()}</button>`)
      .join('');
  };
  render();
  onLangChange(render);
  container.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('[data-lang]');
    if (btn) setLang(btn.getAttribute('data-lang') as Lang);
  });
}
