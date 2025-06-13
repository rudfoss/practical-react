import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom"
import { App } from "./App"

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
		element: (
			<>
				<header>
					<h1>Hello world!</h1>
				</header>
				<nav>
					<a href="/">Home</a>
					<a href="/test">Link</a>
				</nav>
				<main>
					<Outlet />
				</main>
			</>
		)
	}
])
