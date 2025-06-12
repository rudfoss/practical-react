import { useState } from "react"

export const ObjectState = () => {
	const [texts, setTexts] = useState({
		text1: "foo",
		text2: "bar"
	})

	const changeTexts = () => {
		texts.text1 = "hello"
		texts.text2 = "goodbye"
		setTexts(texts)

		///

		const newTexts = {
			...texts,
			text1: "hello"
		}
		setTexts(newTexts)
	}

	return (
		<>
			<p>Text 1: {texts.text1}</p>
			<p>Text 1: {texts.text2}</p>
			<button type="button" onClick={changeTexts}>
				Change texts
			</button>
		</>
	)
}
