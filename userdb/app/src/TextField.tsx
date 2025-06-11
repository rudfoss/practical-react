import { useId } from "react"

interface TextFieldProps {
	label: string

	value: string
	/**
	 * A function that is called every time the value changes.
	 */
	onChange: (newValue: string) => void

	disabled?: boolean
}

export const TextField = ({
	label,
	value,
	onChange,
	disabled
}: TextFieldProps) => {
	const id = useId()
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type="text"
				disabled={disabled}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	)
}
