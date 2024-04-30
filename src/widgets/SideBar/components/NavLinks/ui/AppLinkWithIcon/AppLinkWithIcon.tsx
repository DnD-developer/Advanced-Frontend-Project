import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink, AppLinkProps } from "@ui/AppLink"
import { FC, SVGProps } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ApplinkWithIcon.module.scss"

type AppLinkWithIconProps = {
	classNames?: string
	collapsed: boolean
	name: string
	Icon: FC<SVGProps<SVGSVGElement>>
} & Omit<AppLinkProps, "className">
export const AppLinkWithIcon: FC<AppLinkWithIconProps> = props => {
	const { classNames, collapsed, to, theme, Icon, name, inverted } = props

	const { t } = useTranslation()

	return (
		<AppLink
			to={to}
			theme={theme}
			inverted={inverted}
			className={classNamesHelp("", {}, [classNames])}
		>
			<div className={styles.link}>
				<Icon className={collapsed ? styles.linkIconCollapsed : styles.linkIcon} />
				{collapsed ?
					<></>
				:	t(name)}
			</div>
		</AppLink>
	)
}
