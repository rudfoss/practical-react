import { ReactNode } from "react"
import { Outlet } from "react-router-dom"

import classes from "./MainLayout.module.css"

export interface MainLayoutProps {
	heading: string
	menu: ReactNode
}

export const MainLayout = ({ heading, menu }: MainLayoutProps) => {
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
