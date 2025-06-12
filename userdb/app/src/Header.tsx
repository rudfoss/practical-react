interface HeaderProps {
	/**
	 * This is the title text placed between two <h1> tags
	 */
	children: string
	prefix?: string
	suffix?: string
}

// const { prefix = "Prefix:", children, suffix } = props
export const Header = ({ prefix, children, suffix }: HeaderProps) => (
	<h1>
		{prefix}
		{children}
		{suffix && <> - {suffix}</>}
	</h1>
)
