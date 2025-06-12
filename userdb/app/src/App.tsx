import { GroupsSearchTable } from "./GroupsSearchTable"
import { staticGroups } from "./staticGroups"

export const App = () => {
	return <GroupsSearchTable groups={staticGroups} />
}
