import { lazy } from "react"
import delayForDemo from "../../helpers/delayForDemo"

const LazyPage = lazy(async () => delayForDemo(await import("./Main.page")))
export const MainLazyPage = () => {
	return <LazyPage />
}