import { useState } from "react"
import { StaticGroup } from "./staticGroups"

import classes from "./GroupsTable.module.css"

type SortBy = "id" | "displayName"
type SortDirection = "ascending" | "descending"

export interface GroupsTableProps {
	makeHref?: (group: StaticGroup) => string
	highlightedGroupIds?: string[]
	groups: StaticGroup[]
}

export const GroupsTable = ({
	makeHref,
	highlightedGroupIds = [],
	groups
}: GroupsTableProps) => {
	const [sortBy, setSortBy] = useState<SortBy>()
	const [sortDirection, setSortDirection] = useState<SortDirection>("ascending")

	groups.sort((a, b) => {
		const reverseDirection = sortDirection === "ascending" ? 1 : -1
		let comparisonValue = 0

		switch (sortBy) {
			case "id":
				comparisonValue = a.id.localeCompare(b.id)
				break
			case "displayName":
				comparisonValue = a.displayName.localeCompare(b.displayName)
				break
		}

		return comparisonValue * reverseDirection
	})

	const setSort = (columnName: SortBy) => {
		if (sortBy === columnName) {
			setSortDirection(
				sortDirection === "ascending" ? "descending" : "ascending"
			)
			return
		}

		setSortBy(columnName)
		setSortDirection("ascending")
	}

	return (
		<table className={classes.table}>
			<thead>
				<tr>
					<th>
						<button type="button" onClick={() => setSort("id")}>
							ID
						</button>
					</th>
					<th>
						<button type="button" onClick={() => setSort("displayName")}>
							Display name
						</button>
					</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{groups.map((group) => (
					<tr
						key={group.id}
						style={{
							color: highlightedGroupIds.includes(group.id)
								? "hotpink"
								: undefined
						}}
					>
						<td>
							{makeHref ? <a href={makeHref(group)}>{group.id}</a> : group.id}
						</td>
						<td>{group.displayName}</td>
						<td>{group.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
