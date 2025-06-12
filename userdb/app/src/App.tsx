import { LoginForm } from "./LoginForm"

export const App = () => {
	const onLogin = (username: string, password: string) => {
		console.log({ username, password })
	}

	return <LoginForm onLogin={onLogin} />
}
