import { renderWithTranslation } from "@lib/helpers/tests/renderWithTranslation"
import { fireEvent, screen } from "@testing-library/react"
import { SideBar } from "./SideBar"

describe("Test Widget Sidebar", () => {
	test("Render correctly", () => {
		renderWithTranslation(<SideBar />)

		expect(screen.getByTestId("sidebar-widgets")).toBeInTheDocument()
	})

	test("Collapsed", () => {
		renderWithTranslation(<SideBar />)

		const btn = screen.getByTestId("sidebar-collapsed-btn")

		fireEvent.click(btn)

		expect(screen.getByTestId("sidebar-widgets")).toHaveClass("collapsed")
	})

	test("UnCollapsed", () => {
		renderWithTranslation(<SideBar />)

		const btn = screen.getByTestId("sidebar-collapsed-btn")

		fireEvent.click(btn)
		fireEvent.click(btn)

		expect(screen.getByTestId("sidebar-widgets")).not.toHaveClass("collapsed")
	})
})
