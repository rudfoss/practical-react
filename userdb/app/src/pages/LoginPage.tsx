import { useUserDbApiService } from "@pr/userdb-api-spec/react"
import { LoginRequest } from "@pr/userdb-api-spec/ts"
import { useMutation } from "@tanstack/react-query"
import { LoginForm } from "../auth"

export const LoginPage = () => {
	const { authClient } = useUserDbApiService()
	const { mutate, data } = useMutation({
		mutationFn: (loginRequest: LoginRequest) => authClient().login(loginRequest)
	})

	const onLogin = (username: string, password: string) => {
		mutate({ username, password })
	}

	return (
		<>
			<LoginForm onLogin={onLogin} />
			<p>Your token: {data?.token}</p>
		</>
	)
}
