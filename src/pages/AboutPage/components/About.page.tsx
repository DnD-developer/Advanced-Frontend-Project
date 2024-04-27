import { Counter } from "@entities/Counter"
import { type FC } from "react"
import { useTranslation } from "react-i18next"

const AboutPage: FC = () => {
	const { t } = useTranslation("aboutPage")
	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
			<Counter />
		</div>
	)
}

export default AboutPage
