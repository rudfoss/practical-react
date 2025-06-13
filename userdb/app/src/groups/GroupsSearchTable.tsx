import { CheckboxField, TextField } from "@pr/libs-fields"
import { useState } from "react"
import { GroupsTable } from "./GroupsTable"
import { queryGroup } from "./queryGroup"
import { StaticGroup } from "./staticGroups"

export interface GroupsSearchTableProps {
	groups: StaticGroup[]
}

export const GroupsSearchTable = ({ groups }: GroupsSearchTableProps) => {
	const [searchQuery, setSearchQuery] = useState("")
	const [filterResults, setFilterResults] = useState(false)

	const matchingGroups = groups.filter((group) =>
		queryGroup(group, searchQuery)
	)
	const highlightedGroupIds = searchQuery
		? matchingGroups.map((group) => group.id)
		: []

	return (
		<>
			<TextField label="Search" value={searchQuery} onChange={setSearchQuery} />
			<CheckboxField
				label="Filter results"
				value={filterResults}
				onChange={setFilterResults}
			/>
			<hr />
			<GroupsTable
				groups={filterResults ? matchingGroups : groups}
				highlightedGroupIds={filterResults ? undefined : highlightedGroupIds}
			/>
		</>
	)
}
