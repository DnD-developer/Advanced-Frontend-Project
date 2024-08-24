import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text, TextAlign } from "@ui/Text"
import { memo } from "react"
import type { articleBlockDataImageType } from "../../../../types/articleBlockData.type"

type ArticleBlockImageProps = {
	className?: string
	src: articleBlockDataImageType["src"]
	title: articleBlockDataImageType["title"]
	alt?: string
}
export const ArticleBlockImage = memo<ArticleBlockImageProps>(props => {
	const { className, src, title, alt = "" } = props

	return (
		<VStack
			gap={"gap16"}
			align={"center"}
			className={classNamesHelp("", {}, [className])}
		>
			<img
				style={{ width: "100%" }}
				src={src}
				alt={alt}
			/>
			{title && (
				<Text
					align={TextAlign.CENTER}
					title={title}
				/>
			)}
		</VStack>
	)
})
