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

## 🚀 Passo a Passo como esse projeto foi criado

- Primeiro passo, iniciando um novo projeto com vite:

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
- Arquivo de configuração `.eslintrc.json`

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
- Criar arquivo ignore ESLint `.eslintignore`

```bash
node_modules
.next
/*.js
```

- Configurar vscode para corrigir o código em autosave usando eslint

```bash
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
```

## Prettier

```bash
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

- Criar de configuração do prettier `prettier.config.js`

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
- Criar um arquivo de roteamento e importar bibliotecas

_src/Routes.tsx_
```bash
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Contato } from './pages/Contato'
import { Home } from './pages/Home'

export function AppRoutes () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  )
}
```

- Altere o arquivo App.tsx

_src/App.tsx_
```bash
import { AppRoutes } from './Routes'

function App() {
  return (
    <AppRoutes />
  )
}

export default App
```

## Helmet Async

```bash
npm install react-helmet-async
```
- Importe e adicione a tag `<HelmetProvider>` em main.tsx

_src/main.tsx_

```bash
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { HelmetProvider } from 'react-helmet-async'

ReactDOM.render(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
  document.getElementById('root')
)
```
- Dentro de cada pagina que deseje adicionar meta para SEO, adicione o helmet

Exemplo: _src/pages/Contato.tsx_

```bash
<Helmet>
  <title>Contato</title>
  <meta
    name="description"
    content="Entre em contato agora."
  />
  <link rel="canonical" href="/contato" />
</Helmet>
```
- Crie arquivos `robots.txt` e `sitemap.txt` dentro da pasta public

Exemplo: _public/robots.txt_

```bash
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
```
Exemplo: _public/sitemap.txt_

```bash
https://seu-dominio.com/
https://seu-dominio.com/contato
```

## Stitches

```bash
npm install @stitches/react
```
- Criar arquivo de configuração stitches na raiz

Exemplo: _stitches.config.tsx_

```bash
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
```

## Lodash

- lodash.merge é utilizado em alguns componentes deste projeto (Instalação Opcional, caso não utilize esses componentes)

```bash
npm install @types/lodash.merge
```

## Radix

- Radix Colors, é utilizado na estilização de cores em _stitches.config.tsx_ (Instalação Opcional, pode se usar sua propia paleta de cores)

```bash
npm install @radix-ui/colors
```

- Radix Icons, é utilizado em alguns componentes deste projeto (Instalação Opcional, caso não utilize esses componentes)

```bash
npm install @radix-ui/react-icons
```

## React i18next

```bash
npm install react-i18next i18next
```

- React i18next Language Detector

```bash
npm install i18next-browser-languagedetector
```

- React i18next Http backend

```bash
npm install i18next-http-backend
```
- Crie os arquivos `i18n.ts` e `i18n.constants.ts` dentro de sua pasta de preferência

Exemplo: _src/utils/i18n/i18n.ts_

```bash
import i18next, { i18n as i18nInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { namespaces } from "./i18n.constants";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from "i18next-http-backend";

let i18nOptions = {
  //lng: 'pt-BR',
  supportedLngs: ['pt-BR', 'en'],
  //fallbackLng: "pt-BR",
  detection: {
    order: ['navigator', 'localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage', 'cookie']
  },
  //preload: ['pt-BR'],
  backend: {
    loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
  },
  ns: namespaces.common,
  /* react: { useSuspense: false, } */
}

const createI18n = (): i18nInstance => {
  const i18n = i18next.createInstance().use(initReactI18next);

  i18n
    .use(LanguageDetector)
    .use(HttpApi)
    .init(i18nOptions)

  return i18n;
};

export const i18n = createI18n();
```
Exemplo: _src/utils/i18n/i18n.i18n.constants.ts_

```bash
export const namespaces = {
  pages: {
    home: "pages.home",
  },
  common: "common",
};

export const languages = {
  pt: "pt-BR",
  en: "en",
};
```

- Crie os arquivos conforme cada idioma dentro de public/assets/locales/ Exemplo: _public/assets/locales/en/_ e _public/assets/locales/pt-BR/_

- Crie um arquivo json com o conteúdo para cada idioma da página home por exemplo

Exemplo Português: _public/assets/locales/pt-BR/page.home.json_

```bash
{
  "hero": {
    "title": "Soluções Digitais para Eventos",
    "text": "Nossas soluções digitais ajudam a simplificar todas as etapas de eventos de pequeno, médio e grande porte."
  }
}
```

Exemplo Inglês: _public/assets/locales/en/page.home.json_

```bash
{
  "hero": {
    "title": "Digital Solutions for Events",
    "text": "Our digital solutions help simplify all stages of small, medium and large events.",
  }
}
```
- Dentro do componente que for utilizar faça o seguinte

```bash
import { useTranslation } from 'react-i18next'
import { namespaces } from '../utils/i18n/i18n.constants'

export function App() {

  const { t } = useTranslation(namespaces.pages.home)

  return (
    <>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.text")}</p>
    </>
  )
}

export default App
```

# Radix Primative Components

- Utilizando componentes Radix-ui

## Dropdown Menu

```bash
npm install @radix-ui/react-dropdown-menu
```

Exemplo:

```bash
// your-dropdown-menu.js
import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Content ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.Arrow />
      </DropdownMenuPrimitive.Content>
    );
  }
);

export const DropdownMenuLabel = DropdownMenuPrimitive.Label;
export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuCheckboxItem = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.CheckboxItem>
    );
  }
);

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
```

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
