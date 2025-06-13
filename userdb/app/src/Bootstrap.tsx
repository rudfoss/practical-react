import { ProvideHeaderService } from "@pr/libs-ui"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

const queryClient = new QueryClient()

export interface BootstrapProps {
	children: ReactNode
}

export const Bootstrap = ({ children }: BootstrapProps) => {
	return (
		<ProvideHeaderService>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ProvideHeaderService>
	)
}
