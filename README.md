# HubCréator MVP

Prototype MVP pour HubCréator, construit avec Next.js (App Router), React, TypeScript, Tailwind CSS et Framer Motion.

## ✨ Fonctionnalités

- **Dashboard** : cahier du jour, tâches animées, progression et rappels.
- **Classeur** : grille de fiches, filtres, modal de lecture.
- **Cahier hebdomadaire** : timeline verticale des 7 jours.
- **Pages dédiées** : Quiz et IA (prêtes à être enrichies).
- **Stockage local** : persistance via `localStorage` (données de démo préchargées).

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## 🧱 Structure

- `app/` : routes App Router (Dashboard, Classeur, Cahier, Quiz, IA)
- `components/` : composants UI réutilisables
- `lib/storage.ts` : gestion de la donnée locale
- `app/globals.css` : design system de base (couleurs, typographie, espacements)

## 🎨 Design system

Palette principale :
- Fond : `#FAFAFA`
- Cartes : `#FFFFFF`
- Bordures : `#E5E5E5`
- Classeurs : HTML `#E76F51`, CSS `#2A9D8F`, JS `#F4A261`, React `#264653`, Design `#E9C46A`

## ✅ Roadmap MVP

Semaine 1 + 2 :
- Dashboard complet
- Classeur + modal
- Cahier hebdomadaire
- Navigation principale

