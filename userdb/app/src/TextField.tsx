import { useId, useState } from "react"

interface TextFieldProps {
	label: string
	disabled?: boolean
}

export const TextField = ({ label, disabled }: TextFieldProps) => {
	const id = useId()
	const [value, setValue] = useState("")

	const onChange = (newValue: string) => {
		setValue(newValue)
	}

	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type="text"
				disabled={disabled}
				onChange={(event) => onChange(event.target.value)}
			/>
			<p>Du skrev: {value}</p>
		</>
	)
}
