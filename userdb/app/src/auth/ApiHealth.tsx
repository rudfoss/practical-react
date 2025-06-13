import { LoadingSpinner } from "@pr/libs-ui"
import { useUserDbApiService } from "@pr/userdb-api-spec/react"
import { useQuery } from "@tanstack/react-query"

export const ApiHealth = () => {
	const { appClient } = useUserDbApiService()
	const { isLoading, data } = useQuery({
		queryKey: ["health"],
		queryFn: () => appClient().getHealth()
	})

	return (
		<>
			{isLoading && <LoadingSpinner />}
			<pre>
				<code>{data?.bootTime}</code>
			</pre>
		</>
	)
}
