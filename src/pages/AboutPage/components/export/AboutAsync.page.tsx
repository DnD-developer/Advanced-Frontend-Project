import delayForDemo from "@helpers/delayForDemo"
import { type FC, lazy } from "react"

const AboutAsyncPage = lazy<FC>(async () => await delayForDemo(await import("./About.page")))
export { AboutAsyncPage as AboutPage }
