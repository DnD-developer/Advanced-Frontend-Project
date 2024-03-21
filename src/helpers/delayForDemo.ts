import { ComponentType } from "react"

export default async function delayForDemo(calbackFunc: { default: ComponentType<any> }) {
	await new Promise(resolve => {
		setTimeout(resolve, 2000)
	})

	return calbackFunc
}