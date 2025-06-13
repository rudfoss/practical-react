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
		path: "test",
		element: <p>This is a test</p>
	}
]

export const router = createBrowserRouter([
	{
		children: appRoutes,
		element: <MainLayout heading="User Database" menu={<Menu />} />
	}
])
