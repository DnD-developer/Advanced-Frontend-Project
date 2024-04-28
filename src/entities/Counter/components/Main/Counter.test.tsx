import { renderDecorator } from "@decorators/tests/render.decorator"
import { fireEvent, screen } from "@testing-library/react"
import { Counter } from "./Counter"

describe("counterTest", () => {
	beforeEach(() => renderDecorator(<Counter />, { initialState: { counter: { value: 10 } } }))

	test("Render with state", () => {
		expect(screen.getByTestId("value-title")).toHaveTextContent("10")
	})

	test("increment", () => {
		fireEvent.click(screen.getByTestId("btn-increment"))

		expect(screen.getByTestId("value-title")).toHaveTextContent("11")
	})
	test("decrement", () => {
		fireEvent.click(screen.getByTestId("btn-decrement"))

		expect(screen.getByTestId("value-title")).toHaveTextContent("9")
	})
})
