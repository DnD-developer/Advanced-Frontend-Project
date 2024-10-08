import { Page } from "@widgets/Page"
import { memo } from "react"
import { useTranslation } from "react-i18next"

const AboutPage = memo(() => {
	const { t } = useTranslation("aboutPage")
	return (
		<Page data-testid={"aboutPage"}>
			<h1 className="page-header">{t("pageTitle")}</h1>
		</Page>
	)
})

export default AboutPage
