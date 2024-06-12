import delayForDemo from "@helpers/delayForDemo"
import { type FC, lazy } from "react"

const ArticlesAsyncPage = lazy<FC>(async () => await delayForDemo(await import("./Articles.page")))
export { ArticlesAsyncPage as ArticlesPage }
