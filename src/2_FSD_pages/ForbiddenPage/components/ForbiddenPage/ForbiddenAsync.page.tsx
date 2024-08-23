import { type FC, lazy } from "react"

const ForbiddenAsyncPage = lazy<FC>(() => import("./Forbidden.page"))
export { ForbiddenAsyncPage as ForbiddenPage }
