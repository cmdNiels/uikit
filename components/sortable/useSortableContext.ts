import { useContext } from "react";

import SortableRootContext from "./SortableRootContext";

export default function useSortableContext() {
	const context = useContext(SortableRootContext);
	if (!context) {
		throw new Error("`useSortableContext` must be used within `Sortable`");
	}
	return context;
}
