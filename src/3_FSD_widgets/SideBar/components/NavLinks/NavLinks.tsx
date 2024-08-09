import { routesPath } from "@config/routes/routePaths"
import { useAuth } from "@entities/User"
import { VStack } from "@ui/Stack"
import { HTMLAttributes, memo } from "react"
import { AppLinkWithIcon } from "./ui/AppLinkWithIcon/AppLinkWithIcon"

type NavLinksProps = {
	classNames?: string
	collapsed: boolean
} & HTMLAttributes<HTMLUListElement>

export const NavLinks = memo<NavLinksProps>(props => {
	const { classNames, collapsed } = props

	const { isAuth, authData } = useAuth()

	return (
		<VStack
			gap={"gap32"}
			align={"center"}
			className={classNames}
		>
			{routesPath
				.filter(
					({ inHeader, isRequireAuth }) =>
						inHeader && ((isRequireAuth && isAuth) || !isRequireAuth)
				)
				.map(({ name, path, Icon, isRequiredUserId }) => (
					<div key={path}>
						{Icon ?
							<AppLinkWithIcon
								to={isRequiredUserId ? `${path}/${authData?.id}` : path}
								inverted={true}
								collapsed={collapsed}
								Icon={Icon}
								name={name}
							/>
						:	<></>}
					</div>
				))}
		</VStack>
	)
})
