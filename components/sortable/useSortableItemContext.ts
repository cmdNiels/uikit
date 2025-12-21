import { useContext } from "react";

import { SortableItemContext } from "./SortableItem";

export default function useSortableItemContext() {
	const context = useContext(SortableItemContext);
	if (!context) {
		throw new Error("`useSortableItemContext` must be used within `SortableItem`");
	}
	return context;
}
