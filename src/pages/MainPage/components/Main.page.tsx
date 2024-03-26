import { Hello } from "@widgets/Hello"
import { useTranslation } from "react-i18next"

const MainPage = () => {
	const { t } = useTranslation("mainPage")

	return (
		<div>
			<h1 className="page-header">{t("pageTitle")}</h1>
			<Hello>{t("helloContent")}</Hello>
		</div>
	)
}
export default MainPage