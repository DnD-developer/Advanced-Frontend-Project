import delayForDemo from "@helpers/delayForDemo"
import { FC, lazy } from "react"
import { profilePageProps } from "./Profile.page"

const ProfileAsyncPage = lazy<FC<profilePageProps>>(
	async () => await delayForDemo(await import("./Profile.page"))
)

export { ProfileAsyncPage as ProfilePage }
