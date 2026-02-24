import { createI18n } from '../i18n/index';

export default defineNuxtPlugin(() => {
  const i18n = createI18n();
  return { provide: { i18n } };
});
