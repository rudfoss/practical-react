import { useState } from "react"
import { CheckboxField } from "./CheckboxField"
import { PasswordField } from "./PasswordField"

export const App = () => {
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)

	return (
		<>
			<PasswordField
				label="Password"
				value={password}
				onChange={setPassword}
				showPassword={showPassword}
			/>
			<CheckboxField
				label="Show password"
				value={showPassword}
				onChange={setShowPassword}
			/>
		</>
	)
}
