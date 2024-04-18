import { useState } from "react"

import { CheckboxField } from "./CheckboxField"
import { Header } from "./Header"
import { ListDemo } from "./ListDemo"
import { LoginForm } from "./LoginForm"
import { PasswordField } from "./PasswordField"
import { StaticGroupTable } from "./StaticGroupTable"
import { TextField } from "./TextField"
import { staticGroups } from "./staticGroups"

interface MyComponentProps {
	greeting: string
	suffix: string
	padWithWhitespaces: number
	hideSuffix?: boolean
}

const MyComponent = (props: MyComponentProps) => (
	<h2>
		MyComponent: {props.greeting}
		{props.suffix}
	</h2>
)

const onLogin = (username: string, password: string) => {
	console.log({ username, password })
}

export const App = () => <LoginForm onLogin={onLogin} />

// <h1>
// 	👋 Hello there
// 	<MyComponent greeting="Good morning" suffix="!" padWithWhitespaces={4} />
// 	{/* React.createElement(MyComponent, {greeting: "Good morning", suffix:"!", padWithWhitespaces: 4, hideSuffix: true }) */}
// </h1>
