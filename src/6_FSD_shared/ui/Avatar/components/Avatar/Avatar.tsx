import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { ImgHTMLAttributes } from "react"
import { memo } from "react"
import { AvatarSize, AvatarTheme } from "../../constants/Avatar.constant"
import styles from "./Avatar.module.scss"

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
	const {
		className,
		size = AvatarSize.MIDDLE,
		alt,
		src,
		theme = AvatarTheme.CIRCLE,
		...otherProps
	} = props

	return (
		<img
			alt={alt}
			src={src}
			className={classNamesHelp(styles.Avatar, {}, [className, styles[theme], styles[size]])}
			{...otherProps}
		/>
	)
})
