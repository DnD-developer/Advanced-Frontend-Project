import type { articleDetailsDataType } from "@entities/Article"
import type { commentDataType } from "@entities/Comment"
import type { userDataType } from "@entities/User"

export type commentBdDataType = {
	userId: userDataType["id"]
	articleId: articleDetailsDataType["id"]
} & Omit<commentDataType, "user">
