import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text, TextAlign } from "@ui/Text"
import { memo } from "react"
import { articleBlockDataImageType } from "../../../../types/articleBlockData.type"
import styles from "./ArticleBlockImage.module.scss"

type ArticleBlockImageProps = {
	className?: string
	src: articleBlockDataImageType["src"]
	title: articleBlockDataImageType["title"]
	alt?: string
}
export const ArticleBlockImage = memo<ArticleBlockImageProps>(props => {
	const { className, src, title, alt = "" } = props

	return (
		<div className={classNamesHelp(styles.ArticleBlockImage, {}, [className])}>
			<img
				src={src}
				alt={alt}
				className={styles.img}
			/>
			{title && (
				<Text
					align={TextAlign.CENTER}
					title={title}
					className={styles.title}
				/>
			)}
		</div>
	)
})
