import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

import classes from "./MainLayout.module.css"
import { useHeaderService } from "./headerService"

export interface MainLayoutProps {
	menu: ReactNode
}

export const MainLayout = ({ menu }: MainLayoutProps) => {
	const { heading } = useHeaderService()
	return (
		<>
			<header>
				<h1>{heading}</h1>
			</header>
			<div className={classes.columns}>
				<nav>{menu}</nav>
				<main>
					<Outlet />
				</main>
			</div>
		</>
	)
}
