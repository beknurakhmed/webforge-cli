<div align="center">

# webforge-cli

**Интерактивный CLI для создания готовых веб-проектов за секунды**

[![npm version](https://img.shields.io/npm/v/@beknurakhmed/webforge-cli.svg?style=flat-square&color=4f46e5)](https://www.npmjs.com/package/@beknurakhmed/webforge-cli)
[![license](https://img.shields.io/npm/l/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://github.com/beknurakhmed/webforge-cli/blob/main/LICENSE)
[![node](https://img.shields.io/node/v/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://nodejs.org)
[![downloads](https://img.shields.io/npm/dm/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://www.npmjs.com/package/@beknurakhmed/webforge-cli)

[English](README.md) | **Русский** | [O'zbek](README.uz.md)

<br />

Выберите шаблон, фреймворк, стилизацию, стейт-менеджмент и парадигму — получите полностью настроенный многостраничный SPA с роутингом, лэйаутами и реалистичным демо-контентом.

</div>

---

## Быстрый старт

```bash
npx @beknurakhmed/webforge-cli
```

Или установите глобально:

```bash
npm i -g @beknurakhmed/webforge-cli
webforge-cli my-app
```

## Что получите

```
┌  webforge-cli  — генератор шаблонов проектов
│
◆  Название проекта     →  my-app
◆  Тип шаблона          →  E-commerce
◆  Фреймворк            →  React
◆  Парадигма            →  Функциональная
◆  Стилизация           →  Tailwind CSS
◆  Стейт-менеджмент     →  Zustand
◆  Доп. инструменты     →  TypeScript, ESLint, Prettier
│
◇  Проект создан успешно!
│
│  Следующие шаги:
│    cd my-app
│    npm install
│    npm run dev
│
└  Удачного кодинга!
```

## Шаблоны

| Шаблон | Описание | Страницы |
|--------|----------|----------|
| **Landing Page** | Маркетинговая страница с hero, features, CTA | Одна страница |
| **E-commerce** | Каталог товаров, корзина, карточка товара | Главная, Товар, Корзина |
| **CRM** | Контакты, сделки, воронка продаж | Дашборд, Контакты, Сделки, Настройки |
| **Dashboard** | KPI-карточки, графики, таблицы данных | Обзор, Аналитика, Пользователи, Настройки |
| **Blog** | Посты, категории, страницы авторов | Главная, Пост, Категория, О блоге |
| **Portfolio** | Проекты, навыки, форма обратной связи | Главная, Проекты, Обо мне, Контакты |

## Фреймворки

| Фреймворк | Сборщик | Версия | Роутинг |
|-----------|---------|--------|---------|
| **React** | Vite | React 19 | react-router-dom v7 |
| **Vue** | Vite | Vue 3.5 | vue-router v4 |
| **Angular** | Angular CLI | Angular 19 | @angular/router |
| **Vanilla** | Vite | TypeScript | Кастомный hash-роутер |
| **Next.js** | Next.js | v15 | App Router (файловый) |
| **Nuxt** | Nuxt | v3 | Файловый роутинг |

## Стилизация — 8 вариантов

| Стилизация | Совместимые фреймворки |
|------------|----------------------|
| **Tailwind CSS** | React, Vue, Angular, Vanilla, Next.js, Nuxt |
| **SCSS** | React, Vue, Angular, Vanilla, Next.js, Nuxt |
| **CSS Modules** | React, Vue, Vanilla, Next.js, Nuxt |
| **Styled Components** | React, Next.js |
| **Material UI (MUI)** | React, Next.js |
| **Chakra UI** | React, Next.js |
| **Ant Design** | React, Vue, Next.js |
| **Angular Material** | Angular |

Каждый вариант стилизации генерирует **реальные стилизованные компоненты** — не просто установку зависимостей. Tailwind использует утилити-классы, SCSS — переменные и вложенность, MUI — `sx` пропсы и т.д.

## Стейт-менеджмент

| Библиотека | Совместимые фреймворки |
|-----------|----------------------|
| **Redux Toolkit** | React, Next.js |
| **Zustand** | React, Next.js |
| **MobX** | React, Next.js |
| **Pinia** | Vue, Nuxt |
| **RxJS** | Angular |
| **NgRx** | Angular |

## Парадигма кодирования

- **Функциональная** — хуки, composables, чистые функции, сигналы
- **SOLID ООП** — классы, сервисы, инъекция зависимостей, паттерны ООП

## Архитектура

webforge-cli использует **слоистую систему оверлеев**:

```
Слой 1  База фреймворка       (React / Vue / Angular / ...)
Слой 2  Оверлей шаблона       (Landing / E-commerce / CRM / ...)
Слой 3  Вариант парадигмы     (Функциональная / ООП)
Слой 4  Конфиг стилизации     (Tailwind / SCSS / MUI / ...)
Слой 5  Стилизованные компоненты (Компоненты под выбранный стиль)
Слой 6  Стейт-менеджмент      (Redux / Zustand / Pinia / ...)
Слой 7  Доп. инструменты      (TypeScript / ESLint / Prettier)
```

Каждый слой накладывает файлы поверх предыдущего. Зависимости автоматически мержатся в `package.json`.

**Всего комбинаций:** 6 шаблонов x 6 фреймворков x 8 стилей x 7 стейтов x 2 парадигмы = **4 032 уникальных проекта**

## Примеры

```bash
# React + E-commerce + Tailwind + Zustand
npx @beknurakhmed/webforge-cli
# → my-store → E-commerce → React → Functional → Tailwind CSS → Zustand

# Vue + Dashboard + SCSS + Pinia
npx @beknurakhmed/webforge-cli
# → admin → Dashboard → Vue → Functional → SCSS → Pinia

# Next.js + Blog + Ant Design
npx @beknurakhmed/webforge-cli
# → my-blog → Blog → Next.js → Functional → Ant Design → None

# Angular + CRM + Angular Material + NgRx
npx @beknurakhmed/webforge-cli
# → crm-app → CRM → Angular → SOLID OOP → Angular Material → NgRx
```

## Требования

- **Node.js** >= 18.0.0

## Разработка

```bash
git clone https://github.com/beknurakhmed/webforge-cli.git
cd webforge-cli
npm install
npm run build
node dist/index.js
```

| Скрипт | Описание |
|--------|----------|
| `npm run build` | Сборка через tsup |
| `npm run dev` | Режим наблюдения |
| `npm start` | Запуск CLI |
| `npm run typecheck` | Проверка TypeScript |

## Автор

**Beknur** — Frontend-разработчик и Software Engineer

- GitHub: [@beknurakhmed](https://github.com/beknurakhmed)
- npm: [@beknurakhmed](https://www.npmjs.com/~beknurakhmed)

## Лицензия

[MIT](LICENSE) &copy; 2026 Beknur
