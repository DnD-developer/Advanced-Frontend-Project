import { ArticleDetails, articleDetailsDataType } from "@entities/Article"
import { ArticlesRecommendation } from "@features/ArticlesRecommendation"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { CommentsArticleDetails } from "@widgets/CommentsArticleDetails"
import { Page } from "@widgets/Page"
import { memo, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router"

type ArticleDetailsPageProps = {
	className?: string
	testId?: articleDetailsDataType["id"]
}
const ArticleDetailsPage = memo<ArticleDetailsPageProps>(props => {
	const { className, testId = "1" } = props

	const { t } = useTranslation("article")
	const { id } = useParams<{ id: articleDetailsDataType["id"] }>()

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
	} else if (id || testId) {
		element = (
			<>
				<ArticleDetails id={id || testId} />
				<ArticlesRecommendation />
				<CommentsArticleDetails articleId={id || testId} />
			</>
		)
	} else {
		element = <></>
	}

	return <Page className={classNamesHelp("", {}, [className])}>{element}</Page>
})

export default ArticleDetailsPage
