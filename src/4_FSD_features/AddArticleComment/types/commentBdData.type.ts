import { articleDetailsDataType } from "@entities/Article"
import { commentDataType } from "@entities/Comment"
import { userDataType } from "@entities/User"

export type commentBdDataType = {
	userId: userDataType["id"]
	articleId: articleDetailsDataType["id"]
} & Omit<commentDataType, "user">
