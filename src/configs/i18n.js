import React from "react";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import locales from './locales';

i18n
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: locales,
		lng: "en",
		fallbackLng: "en",

		interpolation: {
			escapeValue: false
		}
	});