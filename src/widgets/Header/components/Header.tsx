import { classNamesHelp } from "@lib/helpers/classNamesHelp/classNamesHelp"
import { type FC, type PropsWithChildren } from "react"
import styles from "./Header.module.scss"

type HeaderProps = {
	classNames?: string
} & PropsWithChildren
export const Header: FC<HeaderProps> = props => {
	const { classNames, children } = props

	return <div className={classNamesHelp(styles.Header, {}, [classNames])}>{children}</div>
}
