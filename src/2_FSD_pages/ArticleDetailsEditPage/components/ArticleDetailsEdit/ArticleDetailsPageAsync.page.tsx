import delayForDemo from "@helpers/delayForDemo"
import { type FC, lazy } from "react"

const ArticleDetailsEditAsyncPage = lazy<FC>(
	async () => await delayForDemo(await import("./ArticleDetailsEdit.page"))
)
export { ArticleDetailsEditAsyncPage as ArticleDetailsEditPage }
