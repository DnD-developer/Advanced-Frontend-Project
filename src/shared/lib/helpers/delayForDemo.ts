import { ComponentType } from "react"

export default async function delayForDemo(callbackFunc: { default: ComponentType<any> }) {
	await new Promise(resolve => {
		setTimeout(resolve, 2000)
	})

	return callbackFunc
}