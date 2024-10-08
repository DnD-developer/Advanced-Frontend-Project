import { renderDecorator } from "@decorators/tests/render.decorator"
import { userEventDecorator } from "@decorators/tests/userEvent.decorator"
import { screen } from "@testing-library/react"
import { SideBar } from "./SideBar"

describe("Test Widget Sidebar", () => {
	beforeEach(() => renderDecorator(<SideBar />))

	test("Render correctly", () => {
		const SideBarScreen = screen.getByTestId("sidebar-widgets")

		expect(SideBarScreen).toBeInTheDocument()
		expect(SideBarScreen).toHaveClass("collapsed")
	})

	test("Collapsed", async () => {
		const btn = screen.getByTestId("sidebar-collapsed-btn")

		await userEventDecorator("click", btn)

		expect(screen.getByTestId("sidebar-widgets")).not.toHaveClass("collapsed")
	})

	test("UnCollapsed", async () => {
		const btn = screen.getByTestId("sidebar-collapsed-btn")

		await userEventDecorator("click", btn)
		await userEventDecorator("click", btn)

		expect(screen.getByTestId("sidebar-widgets")).toHaveClass("collapsed")
	})
})
