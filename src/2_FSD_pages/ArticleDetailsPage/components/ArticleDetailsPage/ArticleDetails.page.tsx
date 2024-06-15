import { ArticleDetails } from "@entities/Article"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { memo, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router"

type ArticleDetailsPageProps = {
	className?: string
}
const ArticleDetailsPage = memo<ArticleDetailsPageProps>(props => {
	const { className } = props

	const { t } = useTranslation("article")
	const { id } = useParams<{ id: string }>()

	let element: ReactNode

	if (!id && __PROJECT__ !== "storybook") {
		element = (
			<Text
				title={t("article:articleNotFound")}
				theme={TextTheme.ERROR}
				align={TextAlign.CENTER}
				size={TextSize.BIG}
			/>
		)
	} else {
		element = <ArticleDetails id={id || "1"} />
	}

	return <div className={classNamesHelp("", {}, [className])}>{element}</div>
})

export default ArticleDetailsPage
