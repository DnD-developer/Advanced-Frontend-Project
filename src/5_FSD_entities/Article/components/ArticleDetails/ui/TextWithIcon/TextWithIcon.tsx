import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text } from "@ui/Text"
import { FC, memo, SVGProps } from "react"
import styles from "./TextWithIcon.module.scss"

type TextWithIconProps = {
	className?: string
	Icon: FC<SVGProps<SVGSVGElement>>
	text: string
}
export const TextWithIcon = memo<TextWithIconProps>(props => {
	const { className, Icon, text } = props

	return (
		<div className={classNamesHelp(styles.TextWithIcon, {}, [className])}>
			<Icon className={styles.icon} />
			<Text
				text={text}
				className={styles.text}
			/>
		</div>
	)
})
