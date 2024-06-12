import { ArticleTypeConstant } from "../store/constants/Article.constant"
import { articleBlockDataType } from "./ArticleBlockDataType"

export type articleDataType = {
	id: string
	title: string
	subtitle: string
	img: string
	views: number
	createdAt: string
	type: ArticleTypeConstant[]
	blocks: articleBlockDataType[]
}
