import { FC, lazy } from "react"
import { LoginFormProps } from "./LoginForm"

const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import("./LoginForm"))

export { LoginFormAsync as LoginForm }
