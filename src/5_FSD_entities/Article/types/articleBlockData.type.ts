import { ArticleBlockTypeConstant } from "../constants/ArticleBlock.constant"

type articleBlockDataBaseType = {
	id: string
	type: ArticleBlockTypeConstant
	title: string
}

export type articleBlockDataImageType = {
	type?: ArticleBlockTypeConstant.IMAGE
	src: string
} & articleBlockDataBaseType

export type articleBlockDataCodeType = {
	type?: ArticleBlockTypeConstant.CODE
	code: string
} & articleBlockDataBaseType

export type articleBlockDataTextType = {
	type?: ArticleBlockTypeConstant.TEXT
	paragraphs: string[]
} & articleBlockDataBaseType

export type articleBlockDataType =
	| articleBlockDataCodeType
	| articleBlockDataTextType
	| articleBlockDataImageType
