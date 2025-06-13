import { CheckboxField, TextField } from "@pr/libs-fields"
import { useState } from "react"
import { Header } from "./Header"

export const ControlledHeader = () => {
	const [heading, setHeading] = useState("")
	const [showCustomHeading, setShowCustomHeading] = useState(true)

	return (
		<>
			<TextField label="Heading" value={heading} onChange={setHeading} />
			<CheckboxField
				label="Show custom heading"
				value={showCustomHeading}
				onChange={setShowCustomHeading}
			/>
			<Header>{showCustomHeading ? heading : "Hello World!"}</Header>
		</>
	)
}
