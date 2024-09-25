import { PagesPaths } from "@constants/common.constant"
import { useAuth } from "@entities/User"
import { addIdInPagePath } from "@helpers/addIdInPagePath/addIdInPagePath.helper"
import { Avatar, AvatarSize, AvatarTheme } from "@ui/Avatar"
import { Dropdown } from "@ui/Dropdown"
import { memo, useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"

type AvatarDropdownProps = {
	className?: string
}
export const AvatarDropdown = memo<AvatarDropdownProps>(props => {
	const { className } = props

	const { t } = useTranslation()

	const dispatch = useDispatch()
	const { logOut, authData, isAdmin, isManager } = useAuth()

	const logOutHandler = useCallback(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(logOut())
		}
	}, [dispatch, logOut])

	const profileAvatar = useMemo(
		() => (
			<Avatar
				theme={AvatarTheme.CIRCLE}
				size={AvatarSize.SMALL}
				src={authData?.avatar || ""}
				alt={t("translation:avatar")}
			/>
		),
		[authData?.avatar, t]
	)

	const itemsDropDown = useMemo(
		() => [
			...(isManager || isAdmin ?
				[
					{
						content: t("translation:admin"),
						href: `${PagesPaths.ADMIN_PANEL}`
					}
				]
			:	[]),
			{
				content: t("translation:profile"),
				href: addIdInPagePath(PagesPaths.PROFILE, authData?.id)
			},
			{
				content: t("translation:logout"),
				onClick: logOutHandler
			}
		],
		[authData?.id, isAdmin, isManager, logOutHandler, t]
	)

	return (
		<Dropdown
			triggerNode={profileAvatar}
			items={itemsDropDown}
			className={className}
		/>
	)
})
