import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { defaultLang, languagesList, ns } from '@/i18n/vars.ts';

const apiKey = 'fdpAs7W2a4A-hc4-FcbJZQ';
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

const config: InitOptions = {
  fallbackLng: defaultLang,
  ns,
  defaultNS: ns[0],
  supportedLngs: languagesList.map((elem) => elem.id),
};

const isProd = false;
if (isProd) {
  config.backend = {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  };
} else {
  config.backend = {
    loadPath,
  };
}

i18n.use(HttpBackend).use(LanguageDetector).use(initReactI18next).init(config);

export { i18n };
