import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { memo } from "react"
import type { articleBlockDataTextType } from "../../../../types/articleBlockData.type"

type ArticleBlockTextProps = {
	className?: string
	paragraphs: articleBlockDataTextType["paragraphs"]
	title?: articleBlockDataTextType["title"]
}

export const ArticleBlockText = memo<ArticleBlockTextProps>(props => {
	const { className, paragraphs, title } = props

	return (
		<VStack
			className={classNamesHelp("", {}, [className])}
			gap={"gap16"}
		>
			{title && <Text title={title} />}
			<VStack gap={"gap8"}>
				{paragraphs.map(par => (
					<Text
						text={par}
						key={par}
					/>
				))}
			</VStack>
		</VStack>
	)
})
