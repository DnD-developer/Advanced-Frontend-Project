import { userDataType } from "../../User"
import { ArticleTypeConstant } from "../constants/Article.constant"
import { articleBlockDataType } from "./articleBlockData.type"

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
