import { FC, lazy } from "react"
import { profilePageProps } from "./Profile.page"

const ProfileAsyncPage = lazy<FC<profilePageProps>>(() => import("./Profile.page"))

export { ProfileAsyncPage as ProfilePage }
