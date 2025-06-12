import { GroupsTable } from "./GroupsTable"
import { staticGroups } from "./staticGroups"

export const App = () => {
	return <GroupsTable groups={staticGroups} />
}
