import { About, Home, Paper, ProfilePageIcon } from "@assets/index"
import { PagesNames, PagesPaths } from "@constants/common.constant"
import { UserRoles } from "@entities/User"
import type { FC, SVGProps } from "react"

type pagesInfo = {
	name: PagesNames
	path: PagesPaths
	inHeader: boolean
	isRequireAuth: boolean
	isRequiredUserId: boolean
	allowedRoles?: UserRoles[]
	Icon?: FC<SVGProps<SVGSVGElement>>
}

export const routesPath: pagesInfo[] = [
	{
		name: PagesNames.MAIN,
		path: PagesPaths.MAIN,
		inHeader: true,
		isRequiredUserId: false,
		Icon: Home,
		isRequireAuth: false
	},
	{
		name: PagesNames.ABOUT,
		path: PagesPaths.ABOUT,
		inHeader: true,
		isRequiredUserId: false,
		Icon: About,
		isRequireAuth: false
	},
	{
		name: PagesNames.PROFILE,
		path: PagesPaths.PROFILE,
		inHeader: true,
		isRequiredUserId: true,
		Icon: ProfilePageIcon,
		allowedRoles: [UserRoles.USER],
		isRequireAuth: true
	},
	{
		name: PagesNames.ARTICLES,
		path: PagesPaths.ARTICLES,
		inHeader: true,
		Icon: Paper,
		isRequiredUserId: false,
		isRequireAuth: false
	},
	{
		name: PagesNames.ARTICLE_DETAILS,
		path: PagesPaths.ARTICLE_DETAILS,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	},
	{
		name: PagesNames.ARTICLE_DETAILS_EDIT,
		path: PagesPaths.ARTICLE_DETAILS_EDIT,
		isRequiredUserId: false,
		inHeader: false,
		allowedRoles: [UserRoles.USER],
		isRequireAuth: true
	},
	{
		name: PagesNames.ARTICLE_DETAILS_CREATE,
		path: PagesPaths.ARTICLE_DETAILS_CREATE,
		isRequiredUserId: false,
		inHeader: false,
		allowedRoles: [UserRoles.USER],
		isRequireAuth: true
	},
	{
		name: PagesNames.NOT_FOUND,
		path: PagesPaths.NOT_FOUND,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	},
	{
		name: PagesNames.ADMIN_PANEL,
		path: PagesPaths.ADMIN_PANEL,
		isRequiredUserId: false,
		inHeader: false,
		allowedRoles: [UserRoles.ADMIN, UserRoles.MANAGER],
		isRequireAuth: true
	},
	{
		name: PagesNames.FORBIDDEN,
		path: PagesPaths.FORBIDDEN,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	}
]
