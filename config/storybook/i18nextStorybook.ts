import i18n from "i18next"

import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

const ns = ["translation", "mainPage", "aboutPage", "notFoundPage", "profile", "article"]

const supportedLngs = ["en", "ru"]

const resources = ns.reduce((acc: Record<string, Record<string, string>>, n) => {
	supportedLngs.forEach(lng => {
		if (!acc[lng]) acc[lng] = {}
		acc[lng] = {
			...acc[lng],
			[n]: require(`../../public/locales/${lng}/${n}.json`)
		}
	})
	return acc
}, {})

i18n.use(initReactI18next)
	.use(Backend)
	.init({
		lng: "en",
		fallbackLng: "en",
		defaultNS: "translation",
		ns,
		interpolation: { escapeValue: false },
		react: { useSuspense: false },
		supportedLngs,
		resources
	})
	.then()
	.catch()

export default i18n
