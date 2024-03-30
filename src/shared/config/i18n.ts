import i18n from "i18next"

import Backend from "i18next-http-backend"
import { initReactI18next } from "react-i18next"

i18n.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		lng: "en",
		load: "currentOnly",
		debug: __IS_DEV__,

		backend: {
			loadPath: "/locales/{{lng}}/{{ns}}.json"
		}
	})
	.then(() => {})
	.catch(() => {})
