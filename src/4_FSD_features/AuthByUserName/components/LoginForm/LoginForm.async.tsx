import type { FC } from "react"
import { lazy } from "react"
import type { LoginFormProps } from "./LoginForm"

const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import("./LoginForm"))

export { LoginFormAsync as LoginForm }
