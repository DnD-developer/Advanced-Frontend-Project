import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text, TextAlign } from "@ui/Text"
import { memo } from "react"
import { articleBlockDataCodeType } from "../../types/articleBlockData.type"
import styles from "./ArticleBlockCode.module.scss"
import { CopyButton } from "./ui/CopyButton/CopyButton"

type ArticleBlockCodeProps = {
	className?: string
	text: articleBlockDataCodeType["code"]
	title: articleBlockDataCodeType["title"]
}
export const ArticleBlockCode = memo<ArticleBlockCodeProps>(props => {
	const { className, text, title } = props

	return (
		<div className={classNamesHelp(styles.ArticleBlockCode, {}, [className])}>
			<pre className={styles.code}>
				<CopyButton text={text} />
				<code>{text}</code>
			</pre>
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
