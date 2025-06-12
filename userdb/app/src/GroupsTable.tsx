import { useState } from "react"
import { StaticGroup } from "./staticGroups"

type SortBy = "id" | "displayName"

export interface GroupsTableProps {
	groups: StaticGroup[]
}

export const GroupsTable = ({ groups }: GroupsTableProps) => {
	const [sortBy, setSortBy] = useState<SortBy>()

	groups.sort((a, b) => {
		switch (sortBy) {
			case "id":
				return a.id.localeCompare(b.id)
			case "displayName":
				return a.displayName.localeCompare(b.displayName)
		}

		return 0
	})

	return (
		<table>
			<thead>
				<tr>
					<th>
						<button type="button" onClick={() => setSortBy("id")}>
							ID
						</button>
					</th>
					<th>
						<button type="button" onClick={() => setSortBy("displayName")}>
							Display name
						</button>
					</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{groups.map((group) => (
					<tr key={group.id}>
						<td>{group.id}</td>
						<td>{group.displayName}</td>
						<td>{group.description}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
