import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Card } from "@ui/Card/Card"
import { Text, TextAlign, TextTheme } from "@ui/Text"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ArticleListItemError.module.scss"

type ArticleListItemErrorProps = {
	className?: string
}
export const ArticleListItemError = memo<ArticleListItemErrorProps>(props => {
	const { className } = props

	const { t } = useTranslation("article")

	return (
		<Card className={classNamesHelp(styles.ArticleListItemError, {}, [className])}>
			<Text
				title={t("article:errorWithRequestArticle")}
				theme={TextTheme.ERROR}
				align={TextAlign.CENTER}
			/>
		</Card>
	)
})
