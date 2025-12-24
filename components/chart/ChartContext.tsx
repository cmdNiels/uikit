import { type ComponentType, createContext, type ReactNode } from "react";

export type ChartConfig = {
	[k in string]: {
		label?: ReactNode;
		icon?: ComponentType;
	} & ({ color?: string; theme?: never } | { color?: never; theme: Record<"light" | "dark", string> });
};

export const ChartContext = createContext<{
	config: ChartConfig;
} | null>(null);
