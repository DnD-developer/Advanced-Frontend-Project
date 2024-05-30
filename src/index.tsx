import { createRoot } from "react-dom/client"
import "@styles/index.style.scss"
import "@config/i18n/i18n"
import { RootComponent } from "./Root"

const domRoot = document.getElementById("root")

const root = createRoot(domRoot || document.body)

root.render(RootComponent)
