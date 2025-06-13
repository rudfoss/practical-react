import { MainLayout, ProvideHeader } from "@pr/libs-ui"
import { RouteObject, createBrowserRouter } from "react-router-dom"
import { Menu } from "./Menu"
import { HomePage } from "./pages/HomePage"

const appRoutes: RouteObject[] = [
	{
		index: true,
		element: <HomePage />
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
		element: <MainLayout menu={<Menu />} />
	}
])
