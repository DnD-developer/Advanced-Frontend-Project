import delayForDemo from "@helpers/delayForDemo"
import { FC, lazy } from "react"

const ProfileAsyncPage = lazy<FC>(async () => await delayForDemo(await import("./Profile.page")))

export { ProfileAsyncPage as ProfilePage }
