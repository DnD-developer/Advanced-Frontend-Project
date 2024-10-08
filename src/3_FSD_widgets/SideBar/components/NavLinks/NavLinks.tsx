import { routeConfig } from "@config/router/config/route.config"
import { useAuth } from "@entities/User"
import { VStack } from "@ui/Stack"
import type { HTMLAttributes } from "react"
import { memo } from "react"
import { AppLinkWithIcon } from "./ui/AppLinkWithIcon/AppLinkWithIcon"
import { getRouteProfile } from "@config/router"

type NavLinksProps = {
	classNames?: string
	collapsed: boolean
} & HTMLAttributes<HTMLUListElement>

export const NavLinks = memo<NavLinksProps>(props => {
	const { classNames, collapsed } = props

	const { isAuth, authData } = useAuth()

	return (
		<VStack
			role={"navigation"}
			gap={"gap32"}
			align={"center"}
			className={classNames}
		>
			{Object.values(routeConfig)
				.filter(
					({ inHeader, isRequireAuth }) =>
						inHeader && ((isRequireAuth && isAuth) || !isRequireAuth)
				)
				.map(({ name, path, Icon, isRequiredUserId }) => {
					if (Icon) {
						return (
							<AppLinkWithIcon
								key={path}
								to={isRequiredUserId ? getRouteProfile(authData?.id) : path}
								inverted={true}
								collapsed={collapsed}
								Icon={Icon}
								name={name}
							/>
						)
					}
				})}
		</VStack>
	)
})
