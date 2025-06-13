import { useHeaderService } from "@pr/libs-ui"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { GroupsTable, StaticGroup, staticGroups } from "../groups"

const makeGroupLink = (group: StaticGroup) => `/groups/${group.id}`

export const GroupsPage = () => {
	const { setHeading } = useHeaderService()
	const { id } = useParams()
	const highlightedGroupIds = id ? [id] : []
	useEffect(() => {
		setHeading(`Group: ${id ?? "pick one"}`)
	}, [setHeading, id])

	return (
		<GroupsTable
			makeHref={makeGroupLink}
			highlightedGroupIds={highlightedGroupIds}
			groups={staticGroups}
		/>
	)
}
