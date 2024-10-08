import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { FC, SVGProps } from "react"
import { memo } from "react"
import styles from "./TextWithIcon.module.scss"

type TextWithIconProps = {
	className?: string
	Icon: FC<SVGProps<SVGSVGElement>>
	text: string
}
export const TextWithIcon = memo<TextWithIconProps>(props => {
	const { className, Icon, text } = props

	return (
		<HStack
			align={"center"}
			gap={"gap8"}
			className={classNamesHelp("", {}, [className])}
		>
			<Icon className={styles.icon} />
			<Text
				text={text}
				className={styles.text}
			/>
		</HStack>
	)
})
