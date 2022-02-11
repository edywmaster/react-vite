import i18next, { i18n as i18nInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import { namespaces } from "./i18n.constants";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from "i18next-http-backend";

let Options = {
  //lng: 'pt-BR',
  supportedLngs: ['pt-BR', 'en'],
  //fallbackLng: "pt-BR",
  detection: {
    order: ['localStorage', 'cookie', 'navigator', 'htmlTag', 'path', 'subdomain'],

    lookupLocalStorage: 'language',
    lookupSessionStorage: 'language',

    caches: ['localStorage', 'cookie'],
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
    .init(Options)

  return i18n;
};

export const i18n = createI18n();
export const i18nOptions = Options
