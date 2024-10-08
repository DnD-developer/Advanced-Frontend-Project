import { type FC, lazy } from "react"

const AdminPanelAsyncPage = lazy<FC>(() => import("./AdminPanel.page"))
export { AdminPanelAsyncPage as AdminPanelPage }
