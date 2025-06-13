import { useParams } from "react-router-dom"
import { GroupsTable, StaticGroup, staticGroups } from "../groups"

const makeGroupLink = (group: StaticGroup) => `/groups/${group.id}`

export const GroupsPage = () => {
	const { id } = useParams()
	const highlightedGroupIds = id ? [id] : []

	return (
		<GroupsTable
			makeHref={makeGroupLink}
			highlightedGroupIds={highlightedGroupIds}
			groups={staticGroups}
		/>
	)
}
