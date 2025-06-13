import { TextField } from "@pr/libs-fields"
import { useState } from "react"
import { HeavyOp } from "./HeavyOp"

export const PerfTest = () => {
	const [text, setText] = useState("")
	const [text2, setText2] = useState("")
	const [text3, setText3] = useState("")
	const [text4, setText4] = useState("")

	return (
		<>
			<TextField label="Text" value={text} onChange={setText} />
			<TextField label="Text 2" value={text2} onChange={setText2} />
			<TextField label="Text 3" value={text3} onChange={setText3} />
			<TextField label="Text 4" value={text4} onChange={setText4} />
			<HeavyOp title={text} fibNumber={5} />
		</>
	)
}
