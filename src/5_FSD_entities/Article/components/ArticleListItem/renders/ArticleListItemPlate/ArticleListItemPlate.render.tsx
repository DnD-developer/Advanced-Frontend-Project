import { EyeIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Avatar, AvatarTheme } from "@ui/Avatar"
import { Card } from "@ui/Card/Card"
import { Text, TextSize } from "@ui/Text"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { articleListItemStateMap } from "../../../../store/storeTypes/articleListItemState.map"
import styles from "./ArticleListItemPlateRender.module.scss"

type ArticleListItemPlateRenderProps = {
	className?: string
	article: articleListItemStateMap["article"]
	onClickHandler?: () => void
}
export const ArticleListItemPlateRender = memo<ArticleListItemPlateRenderProps>(props => {
	const { className, article, onClickHandler } = props

	const { t } = useTranslation("article")

	return (
		<Card
			className={classNamesHelp(styles.ArticleListItemPlate, {}, [className])}
			onClick={onClickHandler}
		>
			<Text
				text={article.createdAt}
				className={styles.date}
			/>
			<div className={styles.imgWrapper}>
				<Avatar
					theme={AvatarTheme.SQUARE}
					className={styles.img}
					src={article.img}
					alt={t("article:articlePreview")}
				/>
			</div>

			<div className={styles.content}>
				<div className={styles.contentHeader}>
					<Text
						text={[...article.type].join(", ")}
						className={styles.types}
						classNamesText={styles.typesText}
					/>
					<div className={styles.views}>
						<Text
							text={article.views.toString()}
							className={styles.viewsText}
						/>
						<EyeIcon className={styles.viewsIcon} />
					</div>
				</div>
				<Text
					className={styles.title}
					title={article.title}
					size={TextSize.NORMAL}
				/>
			</div>
		</Card>
	)
})
