import type { userDataType } from "../../User"
import type { ArticleTypeConstant } from "../constants/Article.constant"
import type { articleBlockDataType } from "./articleBlockData.type"

export type articleDetailsDataType = {
	id: string
	title: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	user: userDataType
	type: ArticleTypeConstant[]
	blocks: articleBlockDataType[]
}
