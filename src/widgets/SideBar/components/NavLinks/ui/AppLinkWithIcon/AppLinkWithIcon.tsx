import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink, AppLinkTheme } from "@ui/AppLink"
import { FC, SVGProps } from "react"
import { useTranslation } from "react-i18next"
import styles from "./ApplinkWithIcon.module.scss"

type AppLinkWithIconProps = {
	classNames?: string
	path: string
	theme: AppLinkTheme
	collapsed: boolean
	Icon: FC<SVGProps<SVGSVGElement>>
	name: string
}
export const AppLinkWithIcon: FC<AppLinkWithIconProps> = props => {
	const { classNames, collapsed, path, theme, Icon, name } = props

	const { t } = useTranslation()

	return (
		<AppLink
			to={path}
			theme={theme}
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
