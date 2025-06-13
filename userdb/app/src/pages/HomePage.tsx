import { useHeaderService } from "@pr/libs-ui"
import { useEffect } from "react"

export const HomePage = () => {
	const { setHeading } = useHeaderService()
	useEffect(() => {
		setHeading("Home Page")
	}, [setHeading])
	return <h2>Welcome to the user database 👋</h2>
}
