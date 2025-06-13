import { MainLayout } from "@pr/libs-ui"
import { RouteObject, createBrowserRouter } from "react-router-dom"
import { App } from "./App"
import { Menu } from "./Menu"

const appRoutes: RouteObject[] = [
	{
		index: true,
		element: <App />
	},
	{
		path: "groups",
		children: [
			{
				index: true,
				lazy: {
					Component: async () => (await import("./pages/GroupsPage")).GroupsPage
				}
			},
			{
				path: ":id",
				lazy: {
					Component: async () => (await import("./pages/GroupsPage")).GroupsPage
				}
			}
		]
	}
]

export const router = createBrowserRouter([
	{
		children: appRoutes,
		element: <MainLayout heading="User Database" menu={<Menu />} />
	}
])
