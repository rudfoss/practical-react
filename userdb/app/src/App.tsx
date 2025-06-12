import { GroupsSearchTable } from "./GroupsSearchTable"
import { staticGroups } from "./staticGroups"

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
