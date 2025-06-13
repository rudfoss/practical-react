import { StaticGroup } from "./staticGroups"

export interface GroupListProps {
	groups: StaticGroup[]
}

export const GroupList = ({ groups }: GroupListProps) => {
	// const groupLis: ReactNode[] = []
	// for (const group of groups) {
	// 	groupLis.push(<li key={group.id}>{group.displayName}</li>)
	// }

	// const groupLis = groups.map((group) => {
	// 	return <li key={group.id}>{group.displayName}</li>
	// })

	// const groupLis = groups.map((group) => (
	// 	<li key={group.id}>{group.displayName}</li>
	// ))

	return (
		<ul>
			{groups.map((group) => (
				<li key={group.id}>{group.displayName}</li>
			))}
		</ul>
	)
}
