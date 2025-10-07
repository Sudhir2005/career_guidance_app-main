import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import hi from "./locales/hi.json";
import ur from "./locales/ur.json";
import dog from "./locales/dog.json";
import pu from "./locales/pu.json";
import ks from "./locales/ks.json"; // Kashmiri

i18n
  .use(initReactI18next)
  .init({
    resources: { en, hi, ur, dog, pu, ks },
    lng: localStorage.getItem("preferredLanguage") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
