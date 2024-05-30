import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { ImgHTMLAttributes, memo } from "react"
import styles from "./Avatar.module.scss"
import { AvatarSize, AvatarTheme } from "./Avatar.type"

type AvatarCustomProps = {
	className?: string
	theme?: AvatarTheme
	size?: AvatarSize
	src: string
	alt: string
}

type AvatarProps = AvatarCustomProps &
	Omit<ImgHTMLAttributes<HTMLImageElement>, keyof AvatarCustomProps>

export const Avatar = memo<AvatarProps>(props => {
	const { className, size = AvatarSize.MIDDLE, alt, src, theme = AvatarTheme.CIRCLE } = props

	return (
		<img
			alt={alt}
			src={src}
			className={classNamesHelp(styles.Avatar, {}, [className, styles[theme], styles[size]])}
		/>
	)
})
