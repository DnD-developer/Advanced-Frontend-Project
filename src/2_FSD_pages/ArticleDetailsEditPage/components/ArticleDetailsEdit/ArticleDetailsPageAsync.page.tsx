import { type FC, lazy } from "react"

const ArticleDetailsEditAsyncPage = lazy<FC>(async () => import("./ArticleDetailsEdit.page"))
export { ArticleDetailsEditAsyncPage as ArticleDetailsEditPage }
