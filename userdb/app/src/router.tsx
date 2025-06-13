import { MainLayout } from "@pr/libs-ui"
import { RouteObject, createBrowserRouter } from "react-router-dom"
import { App } from "./App"
import { Menu } from "./Menu"
import { GroupsPage } from "./pages/GroupsPage"

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
				element: <GroupsPage />
			},
			{
				path: ":id",
				element: <GroupsPage />
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
