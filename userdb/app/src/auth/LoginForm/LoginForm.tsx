import { CheckboxField, PasswordField, TextField } from "@pr/libs-fields"
import { FormEvent, useState } from "react"

export interface LoginFormProps {
	disabled?: boolean
	onLogin: (username: string, password: string) => void
}

export const LoginForm = ({ disabled, onLogin }: LoginFormProps) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const isValid = username.length > 0 && password.length > 0

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!isValid) return
		onLogin(username, password)
	}

	return (
		<form onSubmit={onSubmit}>
			<TextField
				label="User name"
				value={username}
				onChange={setUsername}
				disabled={disabled}
			/>
			<PasswordField
				showPassword={showPassword}
				label="Password"
				value={password}
				onChange={setPassword}
				disabled={disabled}
			/>
			<CheckboxField
				label="Show password"
				value={showPassword}
				onChange={setShowPassword}
				disabled={disabled}
			/>
			<button type="submit" disabled={disabled || !isValid}>
				Log in
			</button>
		</form>
	)
}
