/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ComponentType } from "react"

export default async function delayForDemo(callbackFunc: {
	default: ComponentType<any>
}): Promise<{ default: ComponentType<any> }> {
	await new Promise(resolve => {
		setTimeout(resolve, 2000)
	})

	return callbackFunc
}
