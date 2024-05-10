/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react"

export default async function delayForDemo(callbackFunc: {
	default: FC<any>
}): Promise<{ default: FC<any> }> {
	await new Promise(resolve => {
		setTimeout(resolve, 2000)
	})

	return callbackFunc
}
