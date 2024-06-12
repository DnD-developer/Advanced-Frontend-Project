import delayForDemo from "@helpers/delayForDemo"
import { type FC, lazy } from "react"

const ArticleDetailsAsyncPage = lazy<FC>(
	async () => await delayForDemo(await import("./ArticleDetails.page"))
)
export { ArticleDetailsAsyncPage as ArticleDetailsPage }
