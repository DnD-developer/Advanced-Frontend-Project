import { Hello } from "@widgets/Hello"
import { type FC } from "react"
import { useTranslation } from "react-i18next"

const MainPage: FC = () => {
	const { t } = useTranslation("mainPage")

	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
			<Hello>{t("mainPage:helloContent")}</Hello>
		</div>
	)
}

export default MainPage
