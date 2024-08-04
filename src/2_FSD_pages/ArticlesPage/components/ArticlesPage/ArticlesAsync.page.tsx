import { type FC, lazy } from "react"

const ArticlesAsyncPage = lazy<FC>(() => import("./Articles.page"))
export { ArticlesAsyncPage as ArticlesPage }
