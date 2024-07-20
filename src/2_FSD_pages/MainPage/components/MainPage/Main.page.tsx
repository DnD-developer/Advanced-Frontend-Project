import { Page } from "@ui/Page"
import { Hello } from "@widgets/Hello"
import { memo } from "react"
import { useTranslation } from "react-i18next"

const MainPage = memo(() => {
	const { t } = useTranslation("mainPage")

	return (
		<Page>
			<h1 className="page-header">{t("pageTitle")}</h1>
			<Hello>{t("mainPage:helloContent")}</Hello>
		</Page>
	)
})

export default MainPage
