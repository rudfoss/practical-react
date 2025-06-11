import { useId } from "react"

export interface CheckboxFieldProps {
	label: string
	disabled?: boolean

	value: boolean
	onChange: (newValue: boolean) => void
}

export const CheckboxField = ({
	label,
	disabled,
	value,
	onChange
}: CheckboxFieldProps) => {
	const id = useId()
	return (
		<div>
			<input
				id={id}
				type="checkbox"
				checked={value}
				onChange={(event) => onChange(event.target.checked)}
				disabled={disabled}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	)
}
