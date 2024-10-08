import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text, TextAlign } from "@ui/Text"
import { memo } from "react"
import type { articleBlockDataCodeType } from "../../../../types/articleBlockData.type"
import { CopyButton } from "../CopyButton/CopyButton"
import styles from "./ArticleBlockCode.module.scss"

type ArticleBlockCodeProps = {
	className?: string
	text: articleBlockDataCodeType["code"]
	title: articleBlockDataCodeType["title"]
}
export const ArticleBlockCode = memo<ArticleBlockCodeProps>(props => {
	const { className, text, title } = props

	return (
		<VStack
			className={classNamesHelp("", {}, [className])}
			gap={"gap16"}
			align={"center"}
		>
			<pre className={styles.code}>
				<CopyButton text={text} />
				<code>{text}</code>
			</pre>
			{title && (
				<Text
					align={TextAlign.CENTER}
					title={title}
				/>
			)}
		</VStack>
	)
})
