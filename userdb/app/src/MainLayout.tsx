import { Outlet } from "react-router-dom"

export const MainLayout = () => {
	return (
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
