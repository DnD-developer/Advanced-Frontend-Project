import { About, Home, Paper, ProfilePageIcon } from "@assets/index"
import { UserRoles } from "@entities/User"
import type { FC, SVGProps } from "react"
import { PagesNames } from "../constants/pagesNames.constant"
import { RoutePaths } from "../constants/routePath.constant"

export type routeInfoType = {
	name: PagesNames
	path: RoutePaths
	inHeader: boolean
	isRequireAuth: boolean
	isRequiredUserId: boolean
	requiredRoles?: UserRoles[]
	Icon?: FC<SVGProps<SVGSVGElement>>
}

export const routeConfig: Record<PagesNames, routeInfoType> = {
	[PagesNames.MAIN]: {
		name: PagesNames.MAIN,
		path: RoutePaths.MAIN,
		inHeader: true,
		isRequiredUserId: false,
		Icon: Home,
		isRequireAuth: false
	},
	[PagesNames.ABOUT]: {
		name: PagesNames.ABOUT,
		path: RoutePaths.ABOUT,
		inHeader: true,
		isRequiredUserId: false,
		Icon: About,
		isRequireAuth: false
	},
	[PagesNames.PROFILE]: {
		name: PagesNames.PROFILE,
		path: RoutePaths.PROFILE,
		inHeader: true,
		isRequiredUserId: true,
		Icon: ProfilePageIcon,
		requiredRoles: [UserRoles.USER],
		isRequireAuth: true
	},
	[PagesNames.ARTICLES]: {
		name: PagesNames.ARTICLES,
		path: RoutePaths.ARTICLES,
		inHeader: true,
		Icon: Paper,
		isRequiredUserId: false,
		isRequireAuth: false
	},
	[PagesNames.ARTICLE_DETAILS]: {
		name: PagesNames.ARTICLE_DETAILS,
		path: RoutePaths.ARTICLE_DETAILS,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	},
	[PagesNames.ARTICLE_DETAILS_EDIT]: {
		name: PagesNames.ARTICLE_DETAILS_EDIT,
		path: RoutePaths.ARTICLE_DETAILS_EDIT,
		isRequiredUserId: false,
		inHeader: false,
		requiredRoles: [UserRoles.USER],
		isRequireAuth: true
	},
	[PagesNames.ARTICLE_DETAILS_CREATE]: {
		name: PagesNames.ARTICLE_DETAILS_CREATE,
		path: RoutePaths.ARTICLE_DETAILS_CREATE,
		isRequiredUserId: false,
		inHeader: false,
		requiredRoles: [UserRoles.USER],
		isRequireAuth: true
	},
	[PagesNames.NOT_FOUND]: {
		name: PagesNames.NOT_FOUND,
		path: RoutePaths.NOT_FOUND,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	},
	[PagesNames.ADMIN_PANEL]: {
		name: PagesNames.ADMIN_PANEL,
		path: RoutePaths.ADMIN_PANEL,
		isRequiredUserId: false,
		inHeader: false,
		requiredRoles: [UserRoles.ADMIN, UserRoles.MANAGER],
		isRequireAuth: true
	},
	[PagesNames.FORBIDDEN]: {
		name: PagesNames.FORBIDDEN,
		path: RoutePaths.FORBIDDEN,
		isRequiredUserId: false,
		inHeader: false,
		isRequireAuth: false
	}
}
