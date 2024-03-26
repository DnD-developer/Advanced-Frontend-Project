// noinspection JSUnusedGlobalSymbols

declare module "*.css" {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}

declare module "*.scss" {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}

declare module "*.svg" {
	import React from "react"
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>
	export default SVG
}

declare module "*.jpg"
declare module "*.jpeg"
declare module "*.png"
declare module "*.gif"
declare module "*.txt"
declare module "*.svg?url"
declare module "*.json"
declare var __IS_DEV__: boolean