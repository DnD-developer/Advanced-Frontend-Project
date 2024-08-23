import { PagesPaths } from "@config/routes/routePaths"
import { ArticleDetails, articleDetailsDataType, getArticleDataSelector } from "@entities/Article"
import { useAuth } from "@entities/User"
import { ArticlesRecommendation } from "@features/ArticlesRecommendation"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink, AppLinkTheme } from "@ui/AppLink"
import { VStack } from "@ui/Stack"
import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { CommentsArticleDetails } from "@widgets/CommentsArticleDetails"
import { Page } from "@widgets/Page"
import { memo, ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import styles from "./ArticleDetailsPage.module.scss"

type ArticleDetailsPageProps = {
	className?: string
	testId?: articleDetailsDataType["id"]
}
const ArticleDetailsPage = memo<ArticleDetailsPageProps>(props => {
	const { className, testId = "1" } = props

	const { t } = useTranslation("article")
	const { id } = useParams<{ id: articleDetailsDataType["id"] }>()
	const { authData } = useAuth()
	const articleData = useSelector(getArticleDataSelector)

	let element: ReactNode

	const toArticleEdit = `${PagesPaths.ARTICLES}/${id}/edit`

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
			<VStack gap={"gap24"}>
				{authData?.id === articleData?.user.id ?
					<AppLink
						className={styles.header}
						to={toArticleEdit}
						theme={AppLinkTheme.OUTLINE}
					>
						{t("article:Edit")}
					</AppLink>
				:	null}
				<ArticleDetails id={id || testId} />
				<ArticlesRecommendation />
				<CommentsArticleDetails articleId={id || testId} />
			</VStack>
		)
	} else {
		element = <></>
	}

	return <Page className={classNamesHelp("", {}, [className])}>{element}</Page>
})

export default ArticleDetailsPage
