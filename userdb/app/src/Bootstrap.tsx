import { ProvideHeaderService } from "@pr/libs-ui"
import { ProvideUserDbApiService } from "@pr/userdb-api-spec/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

const queryClient = new QueryClient()

export interface BootstrapProps {
	children: ReactNode
}

export const Bootstrap = ({ children }: BootstrapProps) => {
	return (
		<ProvideHeaderService>
			<QueryClientProvider client={queryClient}>
				<ProvideUserDbApiService baseUrl="http://localhost:4000">
					{children}
				</ProvideUserDbApiService>
			</QueryClientProvider>
		</ProvideHeaderService>
	)
}
