import { ReactNode, createContext, useContext, useState } from "react"

export interface HeaderServiceContextProps {
	heading: string
	setHeading: (newHeading: string) => void
}

const HeaderServiceContext = createContext<
	HeaderServiceContextProps | undefined
>(undefined)
HeaderServiceContext.displayName = "HeaderServiceContext"

export const useHeaderService = () => {
	const context = useContext(HeaderServiceContext)
	if (!context) throw new Error("HeaderService must be provided before use")
	return context
}

export interface ProvideHeaderServiceProps {
	children: ReactNode
}

export const ProvideHeaderService = ({
	children
}: ProvideHeaderServiceProps) => {
	const [heading, setHeading] = useState("")
	const value: HeaderServiceContextProps = {
		heading,
		setHeading
	}
	return (
		<HeaderServiceContext.Provider value={value}>
			{children}
		</HeaderServiceContext.Provider>
	)
}
