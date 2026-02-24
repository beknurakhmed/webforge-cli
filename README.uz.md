<div align="center">

```
 W E B F O R G E
```

# webforge-cli

**Tayyor veb-loyihalarni soniyalarda yaratish uchun interaktiv CLI**

[![npm version](https://img.shields.io/npm/v/@beknurakhmed/webforge-cli.svg?style=flat-square&color=4f46e5)](https://www.npmjs.com/package/@beknurakhmed/webforge-cli)
[![license](https://img.shields.io/npm/l/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://github.com/beknurakhmed/webforge-cli/blob/main/LICENSE)
[![node](https://img.shields.io/node/v/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://nodejs.org)
[![downloads](https://img.shields.io/npm/dm/@beknurakhmed/webforge-cli.svg?style=flat-square)](https://www.npmjs.com/package/@beknurakhmed/webforge-cli)
[![website](https://img.shields.io/badge/sayt-webforge.beknurdev.uz-4f46e5?style=flat-square)](https://webforge.beknurdev.uz)

[English](README.md) | [Русский](README.ru.md) | **O'zbek**

<br />

Shablon, freymvork, stilizatsiya, holat boshqaruvi va paradigmani tanlang — routing, layoutlar va real demo-kontent bilan to'liq sozlangan ko'p sahifali SPA oling.

</div>

---

## Tez boshlash

```bash
npx @beknurakhmed/webforge-cli
```

Yoki global o'rnating:

```bash
npm i -g @beknurakhmed/webforge-cli
webforge-cli my-app
```

## Nima olasiz

```
┌  webforge-cli  — loyiha shablon generatori
│
◆  Loyiha nomi          →  my-app
◆  Shablon turi         →  E-commerce
◆  Freymvork            →  React
◆  Paradigma            →  Funksional
◆  Stilizatsiya         →  Tailwind CSS
◆  Holat boshqaruvi     →  Zustand
◆  Qo'shimcha vositalar →  TypeScript, ESLint, Prettier
│
◇  Loyiha muvaffaqiyatli yaratildi!
│
│  Keyingi qadamlar:
│    cd my-app
│    npm install
│    npm run dev
│
└  Omadli kodlash!
```

## Shablonlar

| Shablon | Tavsif | Sahifalar |
|---------|--------|-----------|
| **Landing Page** | Marketing sahifasi: hero, xususiyatlar, CTA | Bitta sahifa |
| **E-commerce** | Mahsulot katalogi, savatcha, mahsulot kartasi | Bosh sahifa, Mahsulot, Savatcha |
| **CRM** | Kontaktlar, bitimlar, savdo voronkasi | Dashboard, Kontaktlar, Bitimlar, Sozlamalar |
| **Dashboard** | KPI kartalar, grafiklar, jadvallar | Umumiy, Analitika, Foydalanuvchilar, Sozlamalar |
| **Blog** | Maqolalar, kategoriyalar, muallif sahifalari | Bosh sahifa, Maqola, Kategoriya, Haqida |
| **Portfolio** | Loyihalar, ko'nikmalar, aloqa formasi | Bosh sahifa, Loyihalar, Men haqimda, Aloqa |

## Freymvorklar

| Freymvork | Yig'uvchi | Versiya | Routing |
|-----------|-----------|---------|---------|
| **React** | Vite | React 19 | react-router-dom v7 |
| **Vue** | Vite | Vue 3.5 | vue-router v4 |
| **Angular** | Angular CLI | Angular 19 | @angular/router |
| **Vanilla** | Vite | TypeScript | Maxsus hash router |
| **Next.js** | Next.js | v15 | App Router (fayl asosida) |
| **Nuxt** | Nuxt | v3 | Fayl asosida routing |

## Stilizatsiya — 8 ta variant

| Stilizatsiya | Mos freymvorklar |
|-------------|-----------------|
| **Tailwind CSS** | React, Vue, Angular, Vanilla, Next.js, Nuxt |
| **SCSS** | React, Vue, Angular, Vanilla, Next.js, Nuxt |
| **CSS Modules** | React, Vue, Vanilla, Next.js, Nuxt |
| **Styled Components** | React, Next.js |
| **Material UI (MUI)** | React, Next.js |
| **Chakra UI** | React, Next.js |
| **Ant Design** | React, Vue, Next.js |
| **Angular Material** | Angular |

Har bir stilizatsiya varianti **haqiqiy stilizatsiya qilingan komponentlar** yaratadi — faqat dependency o'rnatish emas. Tailwind utility-klasslar ishlatadi, SCSS o'zgaruvchilar va joylashtirish, MUI `sx` propslar va h.k.

## Holat boshqaruvi

| Kutubxona | Mos freymvorklar |
|-----------|-----------------|
| **Redux Toolkit** | React, Next.js |
| **Zustand** | React, Next.js |
| **MobX** | React, Next.js |
| **Pinia** | Vue, Nuxt |
| **RxJS** | Angular |
| **NgRx** | Angular |

## Kodlash paradigmasi

- **Funksional** — hooklar, composablelar, toza funksiyalar, signallar
- **SOLID OOP** — klasslar, servislar, dependency injection, OOP patternlar

## Arxitektura

webforge-cli **qatlamli overlay tizimi** ishlatadi:

```
Qatlam 1  Freymvork bazasi         (React / Vue / Angular / ...)
Qatlam 2  Shablon overlay          (Landing / E-commerce / CRM / ...)
Qatlam 3  Paradigma varianti       (Funksional / OOP)
Qatlam 4  Stilizatsiya konfiguratsiyasi (Tailwind / SCSS / MUI / ...)
Qatlam 5  Stilizatsiya komponentlari   (Tanlangan stil uchun komponentlar)
Qatlam 6  Holat boshqaruvi         (Redux / Zustand / Pinia / ...)
Qatlam 7  Qo'shimcha vositalar     (TypeScript / ESLint / Prettier)
```

Har bir qatlam oldingi qatlam ustiga fayllarni ko'chiradi. Dependency'lar `package.json`ga avtomatik birlashtiriladi.

**Jami kombinatsiyalar:** 6 shablon x 6 freymvork x 8 stil x 7 holat x 2 paradigma = **4 032 noyob loyiha**

## Misollar

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

## Talablar

- **Node.js** >= 18.0.0

## Ishlab chiqish

```bash
git clone https://github.com/beknurakhmed/webforge-cli.git
cd webforge-cli
npm install
npm run build
node dist/index.js
```

| Skript | Tavsif |
|--------|--------|
| `npm run build` | tsup orqali yig'ish |
| `npm run dev` | Kuzatish rejimi |
| `npm start` | CLI ishga tushirish |
| `npm run typecheck` | TypeScript tekshiruvi |

## Muallif

**Beknur** — Frontend dasturchi va Software Engineer

- GitHub: [@beknurakhmed](https://github.com/beknurakhmed)
- npm: [@beknurakhmed](https://www.npmjs.com/~beknurakhmed)

## Litsenziya

[MIT](LICENSE) &copy; 2026 Beknur
