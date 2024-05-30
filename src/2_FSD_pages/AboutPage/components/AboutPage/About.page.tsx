import { memo } from "react"
import { useTranslation } from "react-i18next"

const AboutPage = memo(() => {
	const { t } = useTranslation("aboutPage")
	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
		</div>
	)
})

export default AboutPage
