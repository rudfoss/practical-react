import { GroupList } from "./GroupList"
import { staticGroups } from "./staticGroups"

export const App = () => {
	return <GroupList groups={staticGroups} />
}
