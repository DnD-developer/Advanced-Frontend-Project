import { createRoot } from "react-dom/client"
import "@styles/index.style.scss"
import "@config/i18n/i18n"
import { RootComponent } from "./Root"

const rootElement = document.querySelector("#root") || document.body
const root = createRoot(rootElement)

root.render(<RootComponent />)
