import { LoadingSpinner } from "@pr/libs-ui"
import { useQuery } from "@tanstack/react-query"

export const loadData = async () => {
	await new Promise((resolve) => setTimeout(() => resolve(undefined), 5000))
	const response = await fetch("http://localhost:4000/stats")
	if (!response.ok)
		throw new Error(
			`Server responded with code ${response.status}: ${response.statusText}`
		)

	const data = await response.json()
	return data
}

export const ApiStats = () => {
	const { isLoading, data } = useQuery({
		queryKey: ["stats"],
		queryFn: loadData
	})

	return (
		<>
			{isLoading && <LoadingSpinner />}
			<pre>
				<code>{JSON.stringify(data, undefined, 2)}</code>
			</pre>
		</>
	)
}
