import { useId } from "react"

import classes from "./TextField.module.css"

export interface TextFieldProps {
	label: string
	disabled?: boolean
	type?: "text" | "password"

	value: string
	/**
	 * A function that is called every time the value changes.
	 */
	onChange: (newValue: string) => void
}

export const TextField = ({
	label,
	value,
	type = "text",
	onChange,
	disabled
}: TextFieldProps) => {
	const id = useId()
	return (
		<div className={classes.container}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				disabled={disabled}
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	)
}
