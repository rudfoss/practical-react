import { MainLayout } from "@pr/libs-ui"
import { RouteObject, createBrowserRouter } from "react-router-dom"
import { Menu } from "./Menu"
import { ApiStatsPage } from "./pages/ApiStatsPage"
import { HealthPage } from "./pages/HealthPage"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"

const appRoutes: RouteObject[] = [
	{
		index: true,
		element: <HomePage />
	},
	{
		path: "login",
		element: <LoginPage />
	},
	{
		path: "stats",
		element: <ApiStatsPage />
	},
	{
		path: "health",
		element: <HealthPage />
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
