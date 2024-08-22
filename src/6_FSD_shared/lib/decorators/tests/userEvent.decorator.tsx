import { act } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"

type eventType = "click" | "type" | "clear"
type optionsType = {
	text?: string
}

export const userEventDecorator = async (
	type: eventType,
	element: Element,
	options?: optionsType
) => {
	let event

	switch (type) {
		case "click":
			event = async () => await userEvent.click(element)
			break
		case "type":
			event = async () => await userEvent.type(element, options?.text || "")
			break
		case "clear":
			event = async () => await userEvent.clear(element)
			break
		default:
			event = async () => await userEvent.click(element)
	}

	await act(async () => await event())
}
