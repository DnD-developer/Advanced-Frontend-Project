import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo } from "react"
import { useTranslation } from "react-i18next"

type ArticlesPageProps = {
	className?: string
}
const ArticlesPage = memo<ArticlesPageProps>(props => {
	const { className } = props

	const { t } = useTranslation("article")

	return (
		<div className={classNamesHelp("", {}, [className])}>
			<h1 className="page-header">{t("article:pageTitle")}</h1>
		</div>
	)
})

export default ArticlesPage
