import delayForDemo from "@shared/helpers/delayForDemo"
import { FC, lazy } from "react"

const LazyPage = lazy(async () => delayForDemo(await import("./About.page")))
export const AboutLazyPage: FC = () => {
	return <LazyPage />
}