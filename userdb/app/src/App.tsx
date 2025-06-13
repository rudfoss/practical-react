import { GroupsSearchTable, staticGroups } from "./groups"

export const App = () => {
	return (
		<>
			<GroupsSearchTable groups={staticGroups} />
			<table>
				<thead>
					<tr>
						<th>A</th>
						<th>B</th>
						<th>C</th>
						<th>D</th>
					</tr>
				</thead>
			</table>
		</>
	)
}
