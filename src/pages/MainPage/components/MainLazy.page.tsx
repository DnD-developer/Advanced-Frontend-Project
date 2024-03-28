import delayForDemo from "@lib/helpers/delayForDemo"
import { type FC, lazy } from "react"

const LazyPage = lazy(async () => await delayForDemo(await import("./Main.page")))
export const MainLazyPage: FC = () => <LazyPage />