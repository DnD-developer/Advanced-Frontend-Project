import delayForDemo from "@lib/helpers/delayForDemo"
import { lazy } from "react"

const LazyPage = lazy(async () => delayForDemo(await import("./Main.page")))
export const MainLazyPage = () => {
	return <LazyPage />
}