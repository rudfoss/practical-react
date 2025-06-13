import { TextField, TextFieldProps } from "./TextField"

export interface PasswordFieldProps extends Omit<TextFieldProps, "type"> {
	showPassword?: boolean
}

export const PasswordField = ({
	showPassword,
	...rest
}: PasswordFieldProps) => {
	const type = showPassword ? "text" : "password"
	return <TextField type={type} {...rest} />
}
