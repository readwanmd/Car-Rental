import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		debug: false,
		supportedLngs: ['en', 'ar', 'fr'],
		fallbackLng: 'en',

		detection: {
			order: ['localStorage', 'cookie', 'sessionStorage'],
			caches: ['localStorage', 'cookie', 'sessionStorage'],
		},

		// lng: localStorage.getItem('i18nextLng') || 'en',
		// backend: {
		// 	loadPath: '/locales/{{lng}}/translation.json',
		// },

		returnObjects: true,
	});
