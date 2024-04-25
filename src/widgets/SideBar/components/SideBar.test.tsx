import { renderDecorator } from "@decorators/tests/render.decorator"
import { fireEvent, screen } from "@testing-library/react"
import { SideBar } from "./SideBar"

describe("Test Widget Sidebar", () => {
	test("Render correctly", () => {
		renderDecorator(<SideBar />)

		expect(screen.getByTestId("sidebar-widgets")).toBeInTheDocument()
	})

	test("Collapsed", () => {
		renderDecorator(<SideBar />)

		const btn = screen.getByTestId("sidebar-collapsed-btn")

		fireEvent.click(btn)

		expect(screen.getByTestId("sidebar-widgets")).not.toHaveClass("collapsed")
	})

	test("UnCollapsed", () => {
		renderDecorator(<SideBar />)

		const btn = screen.getByTestId("sidebar-collapsed-btn")

		fireEvent.click(btn)
		fireEvent.click(btn)

		expect(screen.getByTestId("sidebar-widgets")).toHaveClass("collapsed")
	})
})
