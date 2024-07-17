import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Card } from "@ui/Card/Card"
import { Text, TextAlign, TextTheme } from "@ui/Text"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ArticleItemError.module.scss"

type ArticleItemErrorProps = {
	className?: string
}
export const ArticleItemError = memo<ArticleItemErrorProps>(props => {
	const { className } = props

	const { t } = useTranslation("article")

	return (
		<Card className={classNamesHelp(styles.ArticleItemError, {}, [className])}>
			<Text
				title={t("article:errorWithRequestArticle")}
				theme={TextTheme.ERROR}
				align={TextAlign.CENTER}
			/>
		</Card>
	)
})
