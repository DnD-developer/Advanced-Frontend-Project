import delayForDemo from "@helpers/delayForDemo"
import { type FC, lazy } from "react"

const MainAsyncPage = lazy<FC>(async () => await delayForDemo(await import("./Main.page")))
export { MainAsyncPage as MainPage }
