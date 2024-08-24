import type { FC } from "react"
import { lazy } from "react"
import type { profilePageProps } from "./Profile.page"

const ProfileAsyncPage = lazy<FC<profilePageProps>>(() => import("./Profile.page"))

export { ProfileAsyncPage as ProfilePage }
