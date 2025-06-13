import { LoadingSpinner } from "@pr/libs-ui"
import { useQuery } from "@tanstack/react-query"

const loadHealthData = async () => {
	const response = await fetch("http://localhost:4000/health")
	if (!response.ok)
		throw new Error(
			`Server responded with code ${response.status}: ${response.statusText}`
		)

	const data = await response.json()
	return data
}

export const ApiHealth = () => {
	const { isLoading, data } = useQuery({
		queryKey: ["health"],
		queryFn: loadHealthData
	})

	return (
		<>
			{isLoading && <LoadingSpinner />}
			<pre>
				<code>{data.bootTime}</code>
			</pre>
		</>
	)
}
