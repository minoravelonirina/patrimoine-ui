# Patrimoine UI

Interface web de suivi de patrimoine personnel, permettant de centraliser et gérer ses actifs et biens financiers.

## 📖 Description

**Patrimoine UI** est une application front-end développée en React permettant à un utilisateur de suivre l'évolution de son patrimoine personnel : actifs, biens et valeurs. L'application communique avec une API back-end pour la persistance et la gestion des données.

## ✨ Fonctionnalités

- 📋 Lister l'ensemble des actifs et biens enregistrés
- ➕ Ajouter un nouvel actif au patrimoine
- ✏️ Modifier les informations d'un actif existant
- 🗑️ Supprimer un actif

## 🛠️ Technologies

- **Langage** : JavaScript
- **Framework** : React (Create React App)
- **Style** : CSS

## 📋 Prérequis

- Node.js 16+
- npm
- Une instance de l'API back-end accessible (URL à configurer)

## 🚀 Installation

1. Clonez le dépôt :

```bash
git clone https://github.com/minoravelonirina/patrimoine-ui.git
cd patrimoine-ui
```

2. Installez les dépendances :

```bash
npm install
```

3. Configurez l'URL de l'API dans `baseUrl.js` :

```js
export const BASE_URL = "http://localhost:PORT/api";
```

4. Lancez l'application en mode développement :

```bash
npm start
```

L'application est accessible sur `http://localhost:3000`.

## 📦 Build de production

```bash
npm run build
```

Génère une version optimisée de l'application dans le dossier `build/`, prête à être déployée.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests

## 👤 Auteur

Développé par [Minosoa RAVELONIRINA](https://github.com/minoravelonirina)
