import { RouteObject, createBrowserRouter } from "react-router-dom"
import { App } from "./App"
import { MainLayout } from "./MainLayout"

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
		element: <MainLayout />
	}
])
