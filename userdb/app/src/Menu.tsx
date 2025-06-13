import { NavLink } from "react-router-dom"

export const Menu = () => (
	<>
		<NavLink to="/">Home</NavLink>
		<NavLink to="/login">Login</NavLink>
		<NavLink to="/stats">Stats</NavLink>
		<NavLink to="/health">Health</NavLink>
		<NavLink to="/groups">Groups</NavLink>
		<NavLink to="/groups/716eabb3-5044-49f6-95c1-60efb5709143">
			A single group
		</NavLink>
	</>
)
