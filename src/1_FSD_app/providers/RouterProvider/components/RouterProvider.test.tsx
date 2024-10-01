import { renderDecorator } from "@decorators/tests/render.decorator"
import { RouterProvider } from "./RouterProvider"
import { getRouteAbout } from "@config/router"
import { screen } from "@testing-library/react"
import { userDataMock, UserRoles } from "@entities/User"
import { $api } from "@api/instances/instanceAxios.api"

describe("RouterProviderTest", () => {
	test("Render any Page", async () => {
		await renderDecorator(<RouterProvider />, { route: getRouteAbout() })

		const page = await screen.findByTestId("aboutPage")

		expect(page).toBeInTheDocument()
	})

	test("Redirect notFoundPage", async () => {
		await renderDecorator(<RouterProvider />, { route: "/apple" })

		const page = await screen.findByTestId("notFoundPage")

		expect(page).toBeInTheDocument()
	})

	test("To ProfilePage without auth", async () => {
		await renderDecorator(<RouterProvider />, { route: "/profile/1", initialState: {} })

		const page = await screen.findByTestId("mainPage")

		expect(page).toBeInTheDocument()
	})

	test("To ProfilePage with auth", async () => {
		jest.spyOn($api, "get").mockReturnValue(
			Promise.resolve({
				data: {}
			})
		)

		await renderDecorator(<RouterProvider />, {
			route: "/profile/1",
			initialState: {
				user: { authData: userDataMock({}) }
			}
		})

		const page = await screen.findByTestId("profilePage")

		expect(page).toBeInTheDocument()
	})

	test("To AdminPanel without admin role", async () => {
		await renderDecorator(<RouterProvider />, {
			route: "/admin",
			initialState: {
				user: { authData: userDataMock({ roles: [UserRoles.USER] }) }
			}
		})

		const page = await screen.findByTestId("forbiddenPage")

		expect(page).toBeInTheDocument()
	})

	test("To ProfilePage with admin role", async () => {
		await renderDecorator(<RouterProvider />, {
			route: "/admin",
			initialState: { user: { authData: userDataMock({}) } }
		})

		const page = await screen.findByTestId("adminPanelPage")

		expect(page).toBeInTheDocument()
	})
})
