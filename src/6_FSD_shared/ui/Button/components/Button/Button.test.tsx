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

	test("Theme Primary", () => {
		render(<Button theme={ButtonTheme.PRIMARY} />)

		expect(screen.getByTestId("button-ui")).toHaveClass("primary")
	})

	test("Theme Background", () => {
		render(<Button theme={ButtonTheme.BACKGROUND} />)

		expect(screen.getByTestId("button-ui")).toHaveClass("background")
	})

	test("inverted", () => {
		render(<Button inverted={true} />)

		expect(screen.getByTestId("button-ui")).toHaveClass("inverted")
	})

	test("disabled", () => {
		render(<Button disabled={true} />)

		expect(screen.getByTestId("button-ui")).toHaveClass("disabled")
	})
})
