import { EyeIcon } from "@assets/index"
import { PagesPaths } from "@config/routes/routePaths"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink } from "@ui/AppLink"
import { Avatar, AvatarTheme } from "@ui/Avatar"
import { Card } from "@ui/Card/Card"
import { Text, TextSize } from "@ui/Text"
import { HTMLAttributeAnchorTarget, memo } from "react"
import { useTranslation } from "react-i18next"
import { articleItemStateMap } from "../../../../store/storeTypes/articleItemState.map"
import styles from "./ArticleItemPlateRender.module.scss"

type ArticleItemPlateRenderProps = {
	className?: string
	article: articleItemStateMap["article"]
	target?: HTMLAttributeAnchorTarget
}
export const ArticleItemPlateRender = memo<ArticleItemPlateRenderProps>(props => {
	const { className, article, target } = props

	const { t } = useTranslation("article")

	return (
		<Card className={classNamesHelp(styles.ArticleItemPlate, {}, [className])}>
			<AppLink
				to={`${PagesPaths.ARTICLES}/${article.id}`}
				target={target}
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
			</AppLink>
		</Card>
	)
})
