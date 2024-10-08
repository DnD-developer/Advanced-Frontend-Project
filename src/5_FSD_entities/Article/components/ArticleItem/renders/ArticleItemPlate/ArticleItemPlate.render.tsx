import { EyeIcon } from "@assets/index"

import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink } from "@ui/AppLink"
import { Card } from "@ui/Card"
import { HStack, VStack } from "@ui/Stack"
import { Text, TextSize } from "@ui/Text"
import type { HTMLAttributeAnchorTarget } from "react"
import { memo, useMemo } from "react"
import { useTranslation } from "react-i18next"
import type { articleItemStateMap } from "../../../../store/storeTypes/articleItemState.map"
import styles from "./ArticleItemPlateRender.module.scss"
import { getRouteArticleDetails } from "@config/router"
import { AppImage } from "@ui/AppImage"
import { Skeleton, SkeletonTheme } from "@ui/Skeleton"

type ArticleItemPlateRenderProps = {
	className?: string
	article: articleItemStateMap["article"]
	target?: HTMLAttributeAnchorTarget
}
export const ArticleItemPlateRender = memo<ArticleItemPlateRenderProps>(props => {
	const { className, article, target } = props

	const { t } = useTranslation("article")

	const fallback = useMemo(
		() => (
			<Skeleton
				theme={SkeletonTheme.RECTANGLE}
				className={styles.img}
			/>
		),
		[]
	)
	return (
		<Card className={classNamesHelp(styles.ArticleItemPlate, {}, [className])}>
			<AppLink
				to={getRouteArticleDetails(article.id)}
				target={target}
			>
				<Text
					text={article.createdAt}
					className={styles.date}
				/>
				<VStack gap={"gap16"}>
					<HStack
						align={"center"}
						justify={"center"}
						className={styles.imgWrapper}
					>
						<AppImage
							className={styles.img}
							fallback={fallback}
							src={article.img}
							alt={t("article:articlePreview")}
						/>
					</HStack>

					<VStack gap={"gap8"}>
						<HStack
							align={"center"}
							justify={"spaceBetween"}
						>
							<Text
								text={[...article.type].join(", ")}
								className={styles.types}
								classNamesText={styles.typesText}
							/>
							<HStack
								gap={"gap8"}
								align={"center"}
								widthMax={false}
							>
								<Text
									text={article.views.toString()}
									className={styles.viewsText}
								/>
								<EyeIcon className={styles.viewsIcon} />
							</HStack>
						</HStack>
						<Text
							title={article.title}
							size={TextSize.NORMAL}
						/>
					</VStack>
				</VStack>
			</AppLink>
		</Card>
	)
})
