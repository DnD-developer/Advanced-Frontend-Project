import { renderDecorator } from "@decorators/tests/render.decorator"
import { fireEvent, screen } from "@testing-library/react"
import { SideBar } from "./SideBar"

describe("Test Widget Sidebar", () => {
	beforeEach(() => renderDecorator(<SideBar />))

	test("Render correctly", () => {
		const SideBarScreen = screen.getByTestId("sidebar-widgets")

		expect(SideBarScreen).toBeInTheDocument()
		expect(SideBarScreen).toHaveClass("collapsed")
	})

	test("Collapsed", () => {
		const btn = screen.getByTestId("sidebar-collapsed-btn")

		fireEvent.click(btn)

		expect(screen.getByTestId("sidebar-widgets")).not.toHaveClass("collapsed")
	})

	test("UnCollapsed", () => {
		const btn = screen.getByTestId("sidebar-collapsed-btn")

		fireEvent.click(btn)
		fireEvent.click(btn)

		expect(screen.getByTestId("sidebar-widgets")).toHaveClass("collapsed")
	})
})
