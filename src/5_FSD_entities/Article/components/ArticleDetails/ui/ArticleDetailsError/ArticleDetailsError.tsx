import { Text, TextAlign, TextSize, TextTheme } from "@ui/Text"
import { memo } from "react"
import { useTranslation } from "react-i18next"

type ArticleDetailsErrorProps = {
	className?: string
}
export const ArticleDetailsError = memo<ArticleDetailsErrorProps>(props => {
	const { className } = props

	const { t } = useTranslation("article")
	return (
		<Text
			theme={TextTheme.ERROR}
			size={TextSize.BIG}
			align={TextAlign.CENTER}
			title={t("article:errorWithRequestArticleDetails")}
			className={className}
		/>
	)
})
