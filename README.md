# Projeto React

Estudo de como iniciar um projeto em 2022 utilizando novos métodos de criação e bibliotecas. Esse projeto foi criado com Vite, Stitches, Radix, React Router, Helmet Assync, Lodash e i18next.

## ⚙️ Funcionalidades

- [x] Theme toggle
  - [x] Detector de tema da interface do usuário
  - [x] Botão de alternância dos temas
  - [x] Armazenar preferência do usuário em localStore

- [x] Language toogle
  - [x] Detector de idioma do navegador do usuário
  - [ ] Botão de alternância dos temas
  - [ ] Armazenar preferência do usuário em localStore

# 🛠 Tecnologias utilizadas

## Vite

A Vite que tem como objetivo a disponibilidade de módulos ES nativos no navegador e de ferramentas JavaScript escritas em idiomas compilados para nativos. Saiba mais no site [vitejs.dev](https://vitejs.dev/) ou Git [vitejs/vite](https://github.com/vitejs/vite)

## Stitches

Biblioteca para estilizar componentes ou criar design system. Saiba mais no site [stitches.dev](https://stitches.dev/) ou Git [modulz/stitches](https://github.com/modulz/stitches)

## Radix

Uma biblioteca de componentes de interface do usuário de código aberto para a construção de sistemas de design acessíveis e de alta qualidade e aplicativos web. . Saiba mais no site [radix-ui.com](https://www.radix-ui.com/) ou Git [radix-ui/primitives](https://github.com/radix-ui/primitives)

## i18next

react-i18next é uma biblioteca de internacionalização para React/React Native baseado no framework React i18n. Saiba mais no site [react.i18next.com](https://react.i18next.com/) ou Git [i18next/react-i18next](https://github.com/i18next/react-i18next)

## React Router

React Router é uma biblioteca de roteamento leve e totalmente em destaque para a biblioteca React/React Native. Saiba mais no site [reactrouter.com](https://reactrouter.com/) ou Git [remix-run/react-router](https://github.com/remix-run/react-router)

## Helmet Assync

Este componente Reutilizável React gerenciará todas as suas alterações na tag <head> do documento, para melhorar o seo do seu projeto.

## Lodash

Uma moderna biblioteca de utilitários JavaScript que oferece modularidade, desempenho e extras. Saiba mais no site [lodash.com](https://lodash.com/) ou Git [lodash/lodash](https://github.com/lodash/lodash/wiki/FP-Guide)

## ESLint

Ferramenta para encontrar e corrijir problemas em seu código JavaScript. Saiba mais no site [eslint.org](https://eslint.org/) ou Git [eslint/eslint](https://github.com/eslint/eslint)

## Prettier

Prettier é uma ferramenta de código opinativo para padronização do código. Saiba mais no site [prettier.io](https://prettier.io/) ou Git [prettier/prettier](https://github.com/prettier/prettier)


## 🚀 Passo a Passo como esse projeto foi criado

Primeiro passo, iniciando um novo projeto com vite:

## Vite

```bash
npm init vite@latest react-vite-i18next -- --template react-ts
```

```bash
npm install
```

## ESLint

```bash
npm install eslint --save-dev
```

```bash
npx eslint --init

#- To check syntax, find problems, and enforce code style
#- JavaScript modules (import/export)
#- React
#- Does your project use TypeScript? » Yes
#- Where does your code run » Browser e Node
#- Use a popular style guide » Standard
#- What format do you want your config file to be in? » JSON
#- Do you want to downgrade? » Yes
#- Would you like to install them now with npm? » Yes
```
Arquivo de configuração `.eslintrc.json`

```bash
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "standard",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "prettier/standard",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  }
}
```
Arquivo ignore ESLint `.eslintignore`

```bash
node_modules
.next
/*.js
```

Configurar vscode para corrigir o código em autosave usando eslint

```bash
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
```

## Prettier

```bash
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

Criar de configuração do prettier `prettier.config.js`

```bash
module.exports = {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  endOfLine: 'auto'
}
```

## React Router

```bash
npm install react-router-dom@6
```

## Helmet Async

```bash
npm install react-helmet-async
```

## Lodash

### Lodash Merge

```bash
npm install @types/lodash.merge
```

## Stitches

```bash
npm install @stitches/react
```

## Radix

### Radix Colors

```bash
npm install @radix-ui/colors
```

### Radix Colors

```bash
npm install @radix-ui/react-icons
```

## React i18next

```bash
npm install react-i18next i18next
```

### React i18next Language Detector

```bash
npm install i18next-browser-languagedetector
```

### React i18next Http backend

```bash
npm install i18next-http-backend
```
