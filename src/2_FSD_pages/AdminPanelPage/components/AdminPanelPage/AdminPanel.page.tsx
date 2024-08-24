import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Page } from "@widgets/Page"
import { memo } from "react"
import { useTranslation } from "react-i18next"

type AdminPanelPageProps = {
	className?: string
}
const AdminPanelPage = memo<AdminPanelPageProps>(props => {
	const { className } = props

	const { t } = useTranslation("adminPanel")

	return (
		<Page className={classNamesHelp("", {}, [className])}>
			<h1 className={"page-header"}>{t("adminPanel:pageTitle")}</h1>
		</Page>
	)
})

export default AdminPanelPage
