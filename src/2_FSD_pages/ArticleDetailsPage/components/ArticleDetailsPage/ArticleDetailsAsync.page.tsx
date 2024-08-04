import { type FC, lazy } from "react"

const ArticleDetailsAsyncPage = lazy<FC>(async () => import("./ArticleDetails.page"))
export { ArticleDetailsAsyncPage as ArticleDetailsPage }
