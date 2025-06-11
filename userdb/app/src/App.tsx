import { useState } from "react"
import { TextField } from "./TextField"

export const App = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	return (
		<>
			<TextField label="First Name" value={firstName} onChange={setFirstName} />
			<TextField label="Last Name" value={lastName} onChange={setLastName} />
			<p>First Name: {firstName}</p>
			<p>Last Name: {lastName}</p>
		</>
	)
}
