import i18n from "i18next"
import { initReactI18next } from "react-i18next"

void i18n.use(initReactI18next).init({
	lng: "en",
	fallbackLng: "en",

	ns: ["translation"],
	defaultNS: "translation",

	interpolation: {
		escapeValue: false
	},

	resources: { en: { translationsNS: {} } }
})

export { i18n as i18nTest }
