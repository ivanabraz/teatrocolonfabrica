import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from 'i18next-http-backend'

i18n
	.use(HttpApi)
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		supportedLngs: ['es', 'en'],
		fallbackLng: "es",
		detection: {
<<<<<<< HEAD
			order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
			caches: ['localStorage', 'cookie'],
=======
			order: ['path', 'cookie', 'htmlTag', 'localStorage', 'domain'],
			caches: ['cookie'],
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
		},
		debug: false,
		interpolation: {
			espaceValue: false,
		},
		react: {
			useSuspense: true
		},
		backend: {
<<<<<<< HEAD
			loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
=======
			loadPath: '/locales/{{lng}}/{{ns}}.json',
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
		},
		ns: ['global']
	});

export default i18n;
