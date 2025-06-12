import { naiveFibonacci } from "@pr/libs-utils"
import { useMemo } from "react"

export interface HeavyOpProps {
	title: string
	fibNumber?: number
}

export const HeavyOp = ({ title, fibNumber = 1 }: HeavyOpProps) => {
	const fib = useMemo(() => naiveFibonacci(fibNumber), [fibNumber])
	return (
		<p>
			{title} {fib}
		</p>
	)
}
