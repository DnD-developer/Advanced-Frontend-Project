import { FC, lazy } from "react"
import delayForDemo from "../../helpers/delayForDemo"

const LazyPage = lazy(async () => delayForDemo(await import("./About.page")))
export const AboutLazyPage: FC = () => {
	return <LazyPage />
}