import { render, screen } from "@testing-library/react"
import { Button, ButtonTheme } from "./Button"

describe("Test Ui Button", () => {
	test("Renders correctly", () => {
		render(<Button>Test</Button>)

		const element = screen.getByTestId("button-ui")

		expect(element).toBeInTheDocument()
		expect(element).toHaveClass("Button")
		expect(element).toHaveTextContent("Test")
	})

	test("Theme Outline", () => {
		render(<Button theme={ButtonTheme.OUTLINE} />)

		expect(screen.getByTestId("button-ui")).toHaveClass("outline")
	})

	test("Theme Clear", () => {
		render(<Button theme={ButtonTheme.CLEAR} />)

		expect(screen.getByTestId("button-ui")).toHaveClass("clear")
	})
})
