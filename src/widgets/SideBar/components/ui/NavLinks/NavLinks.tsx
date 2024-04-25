import { routesPath } from "@config/pagesPathsNames"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink, AppLinkTheme } from "@ui/AppLink"
import { FC, HTMLAttributes } from "react"
import { useTranslation } from "react-i18next"
import styles from "./NavLinks.module.scss"

type NavLinksProps = {
	classNames?: string
	collapsed: boolean
} & HTMLAttributes<HTMLUListElement>

export const NavLinks: FC<NavLinksProps> = props => {
	const { classNames, collapsed } = props
	const { t } = useTranslation()

	return (
		<ul className={classNamesHelp(styles.linkList, {}, [classNames])}>
			{routesPath
				.filter(({ inHeader }) => inHeader)
				.map(({ name, path, Icon }) => (
					<li
						key={path}
						className={styles.linkItem}
					>
						<AppLink
							to={path}
							theme={AppLinkTheme.INVERTED}
						>
							<div className={styles.link}>
								<Icon
									className={
										collapsed ? styles.linkIconCollapsed : styles.linkIcon
									}
								/>
								{collapsed ?
									<></>
								:	t(name)}
							</div>
						</AppLink>
					</li>
				))}
		</ul>
	)
}
