import { EyeIcon } from "@assets/index"
import { PagesPaths } from "@config/routes/routePaths"
import { FAKE_AVATAR } from "@constants/common.constant"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink } from "@ui/AppLink"
import { Avatar, AvatarSize, AvatarTheme } from "@ui/Avatar"
import { Button, ButtonTheme } from "@ui/Button"
import { Card } from "@ui/Card/Card"
import { Text, TextSize } from "@ui/Text"
import { HTMLAttributeAnchorTarget, memo } from "react"
import { useTranslation } from "react-i18next"
import { ArticleBlockTypeConstant } from "../../../../constants/ArticleBlock.constant"
import { articleItemStateMap } from "../../../../store/storeTypes/articleItemState.map"
import { articleBlockDataTextType } from "../../../../types/articleBlockData.type"
import { ArticleBlockText } from "../../../ArticleDetails/ui/ArticleBlockText/ArticleBlockText"
import styles from "./ArticleItemDetailedRender.module.scss"

type ArticleItemDetailedRenderProps = {
	className?: string
	article: articleItemStateMap["article"]
	target?: HTMLAttributeAnchorTarget
}
export const ArticleItemDetailedRender = memo<ArticleItemDetailedRenderProps>(props => {
	const { className, article, target } = props

	const { t } = useTranslation("article")

	const textBlock = article.blocks.find(
		block => block.type === ArticleBlockTypeConstant.TEXT
	) as articleBlockDataTextType

	return (
		<Card className={classNamesHelp(styles.ArticleItemDetailed, {}, [className])}>
			<div className={styles.header}>
				<div className={styles.author}>
					<Avatar
						size={AvatarSize.SMALL}
						src={article.user?.avatar || FAKE_AVATAR}
						alt={t("article:authorAvatar")}
					/>

					<Text
						className={styles.authorName}
						title={article.user.userName}
					/>
				</div>
				<Text text={article.createdAt} />
			</div>
			<Text
				title={article.title}
				size={TextSize.BIG}
				className={styles.title}
			/>
			<Text
				text={article.type.join(", ")}
				className={styles.types}
				classNamesText={styles.typesText}
			/>
			<div className={styles.preview}>
				<Avatar
					className={styles.img}
					src={article.img}
					alt={t("article:articlePreview")}
					theme={AvatarTheme.SQUARE}
				/>
			</div>

			{textBlock && (
				<ArticleBlockText
					paragraphs={textBlock.paragraphs}
					className={styles.description}
				/>
			)}
			<div className={styles.footer}>
				<AppLink
					to={`${PagesPaths.ARTICLES}/${article.id}`}
					target={target}
				>
					<Button theme={ButtonTheme.OUTLINE}>{t("article:readMore")}</Button>
				</AppLink>

				<div className={styles.view}>
					<Text
						text={article.views.toString()}
						className={styles.viewText}
					/>
					<EyeIcon className={styles.viewIcon} />
				</div>
			</div>
		</Card>
	)
})
