import { routesPath } from "@config/routes/routePaths"
import { useAuth } from "@entities/User"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HTMLAttributes, memo } from "react"
import styles from "./NavLinks.module.scss"
import { AppLinkWithIcon } from "./ui/AppLinkWithIcon/AppLinkWithIcon"

type NavLinksProps = {
	classNames?: string
	collapsed: boolean
} & HTMLAttributes<HTMLUListElement>

export const NavLinks = memo<NavLinksProps>(props => {
	const { classNames, collapsed } = props

	const { isAuth, authData } = useAuth()

	return (
		<ul className={classNamesHelp(styles.linkList, {}, [classNames])}>
			{routesPath
				.filter(
					({ inHeader, isRequireAuth }) =>
						inHeader && ((isRequireAuth && isAuth) || !isRequireAuth)
				)
				.map(({ name, path, Icon, isRequiredUserId }) => (
					<li
						key={path}
						className={styles.linkItem}
					>
						{Icon ?
							<AppLinkWithIcon
								to={isRequiredUserId ? `${path}/${authData?.id}` : path}
								inverted={true}
								collapsed={collapsed}
								Icon={Icon}
								name={name}
							/>
						:	<></>}
					</li>
				))}
		</ul>
	)
})
