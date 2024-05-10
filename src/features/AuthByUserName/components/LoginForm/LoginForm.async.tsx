import delayForDemo from "@helpers/delayForDemo"
import { FC, lazy } from "react"
import { LoginFormProps } from "./LoginForm"

const LoginFormAsync = lazy<FC<LoginFormProps>>(async () =>
	delayForDemo(await import("./LoginForm"))
)

export { LoginFormAsync as LoginForm }
