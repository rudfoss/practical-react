import { StaticGroup } from "./staticGroups"

export const queryGroup = (group: StaticGroup, searchQuery?: string) => {
	if (!searchQuery) return true
	return (
		group.displayName.includes(searchQuery) ||
		group.description.includes(searchQuery)
	)
}
