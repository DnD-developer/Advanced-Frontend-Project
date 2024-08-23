import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Page } from "@widgets/Page"
import { memo } from "react"
import { useTranslation } from "react-i18next"

type ForbiddenPageProps = {
	className?: string
}
const ForbiddenPage = memo<ForbiddenPageProps>(props => {
	const { className } = props

	const { t } = useTranslation("forbiddenPage")

	return (
		<Page className={classNamesHelp("", {}, [className])}>
			<h1
				className={"page-header"}
				style={{ color: "#ff0000", textAlign: "center" }}
			>
				{t("forbiddenPage:pageTitle")}
			</h1>
		</Page>
	)
})

export default ForbiddenPage
