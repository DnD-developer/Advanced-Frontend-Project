import { ArticleItemList } from "@entities/Article"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text, TextSize } from "@ui/Text"
import { HTMLAttributeAnchorTarget, memo } from "react"
import { useTranslation } from "react-i18next"
import { useGetArticleRecommendationQuery } from "../../api/fetchArticleRecommendation.rtkq"

type ArticlesRecommendationProps = {
	className?: string
}

export const ArticlesRecommendation = memo<ArticlesRecommendationProps>(props => {
	const { className } = props

	const { t } = useTranslation()

	const { data = [], error, isLoading } = useGetArticleRecommendationQuery()

	const target: HTMLAttributeAnchorTarget = "_blank"

	return (
		<VStack
			gap={"gap16"}
			className={classNamesHelp("", {}, [className])}
		>
			<Text
				title={t("article:recommendation")}
				size={TextSize.BIG}
			/>
			<ArticleItemList
				target={target}
				articles={data}
				isLoading={isLoading}
				error={error as string}
			/>
		</VStack>
	)
})
