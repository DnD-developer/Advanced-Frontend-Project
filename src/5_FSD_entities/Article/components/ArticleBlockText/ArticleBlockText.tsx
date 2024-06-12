import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text } from "@ui/Text"
import { memo } from "react"
import { articleBlockDataTextType } from "../../types/ArticleBlockDataType"
import styles from "./ArticleBlockText.module.scss"

type ArticleBlockTextProps = {
	className?: string
	paragraphs: articleBlockDataTextType["paragraphs"]
	title: articleBlockDataTextType["title"]
}

export const ArticleBlockText = memo<ArticleBlockTextProps>(props => {
	const { className, paragraphs, title } = props

	return (
		<div className={classNamesHelp(styles.ArticleBlockText, {}, [className])}>
			{title && (
				<Text
					title={title}
					className={styles.title}
				/>
			)}
			<div className={styles.paragraphsList}>
				{paragraphs.map(par => (
					<Text
						text={par}
						key={par}
						className={styles.paragraph}
					/>
				))}
			</div>
		</div>
	)
})
