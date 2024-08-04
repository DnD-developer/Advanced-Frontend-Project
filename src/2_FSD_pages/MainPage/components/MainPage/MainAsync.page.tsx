import { type FC, lazy } from "react"

const MainAsyncPage = lazy<FC>(() => import("./Main.page"))
export { MainAsyncPage as MainPage }
