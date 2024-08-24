import { EyeIcon } from "@assets/index"
import { PagesPaths } from "@config/routes/routePaths"
import { FAKE_AVATAR } from "@constants/common.constant"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink } from "@ui/AppLink"
import { Avatar, AvatarSize, AvatarTheme } from "@ui/Avatar"
import { Button, ButtonTheme } from "@ui/Button"
import { Card } from "@ui/Card"
import { HStack, VStack } from "@ui/Stack"
import { Text, TextSize } from "@ui/Text"
import type { HTMLAttributeAnchorTarget } from "react"
import { memo } from "react"
import { useTranslation } from "react-i18next"
import { ArticleBlockTypeConstant } from "../../../../constants/ArticleBlock.constant"
import type { articleItemStateMap } from "../../../../store/storeTypes/articleItemState.map"
import type { articleBlockDataTextType } from "../../../../types/articleBlockData.type"
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
			<VStack gap={"gap32"}>
				<HStack
					align={"center"}
					justify={"spaceBetween"}
				>
					<HStack
						align={"center"}
						gap={"gap8"}
						widthMax={false}
					>
						<Avatar
							size={AvatarSize.SMALL}
							src={article.user?.avatar || FAKE_AVATAR}
							alt={t("article:authorAvatar")}
						/>

						<Text title={article.user.userName} />
					</HStack>
					<Text text={article.createdAt} />
				</HStack>
				<Text
					title={article.title}
					size={TextSize.BIG}
				/>
				<Text
					text={article.type.join(", ")}
					className={styles.types}
					classNamesText={styles.typesText}
				/>
				<HStack className={styles.preview}>
					<Avatar
						className={styles.img}
						src={article.img}
						alt={t("article:articlePreview")}
						theme={AvatarTheme.SQUARE}
					/>
				</HStack>

				{textBlock && (
					<ArticleBlockText
						paragraphs={textBlock.paragraphs}
						className={styles.description}
					/>
				)}
				<HStack
					align={"center"}
					justify={"spaceBetween"}
				>
					<AppLink
						to={`${PagesPaths.ARTICLES}/${article.id}`}
						target={target}
					>
						<Button theme={ButtonTheme.OUTLINE}>{t("article:readMore")}</Button>
					</AppLink>

					<HStack
						align={"center"}
						gap={"gap8"}
						widthMax={false}
					>
						<Text
							text={article.views.toString()}
							className={styles.viewText}
						/>
						<EyeIcon className={styles.viewIcon} />
					</HStack>
				</HStack>
			</VStack>
		</Card>
	)
})
