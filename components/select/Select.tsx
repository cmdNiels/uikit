"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { createContext, useRef } from "react";

export const SelectRegistryContext = createContext<Map<unknown, string> | null>(null);

export default function Select({ children, ...props }: SelectPrimitive.Root.Props<unknown, boolean | undefined>) {
	const registryRef = useRef(new Map<unknown, string>());

	return (
		<SelectRegistryContext.Provider value={registryRef.current}>
			<SelectPrimitive.Root
				{...props}
				itemToStringLabel={(value: unknown) => registryRef.current.get(value) ?? String(value)}
			>
				{children}
			</SelectPrimitive.Root>
		</SelectRegistryContext.Provider>
	);
}
