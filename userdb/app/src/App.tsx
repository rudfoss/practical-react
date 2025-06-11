import { useState } from "react"
import { CheckboxField } from "./CheckboxField"
import { TextField } from "./TextField"

export const App = () => {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [checked, setChecked] = useState(false)

	return (
		<>
			<TextField label="First Name" value={firstName} onChange={setFirstName} />
			<TextField label="Last Name" value={lastName} onChange={setLastName} />
			<CheckboxField
				label="Hide values"
				value={checked}
				onChange={setChecked}
			/>

			{!checked && (
				<>
					<p>First Name: {firstName}</p>
					<p>Last Name: {lastName}</p>
				</>
			)}
		</>
	)
}
