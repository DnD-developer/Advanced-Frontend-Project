import { type FC, lazy } from "react"

const AboutAsyncPage = lazy<FC>(() => import("./About.page"))
export { AboutAsyncPage as AboutPage }
