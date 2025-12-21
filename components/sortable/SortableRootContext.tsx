import { createContext } from "react";

import { type SortableRootContextValue } from "./Sortable";

const SortableRootContext = createContext<SortableRootContextValue<unknown> | null>(null);

export default SortableRootContext;
