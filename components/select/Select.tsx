"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { useMemo, Children, isValidElement, type ReactNode } from "react";

function extractItemsFromChildren(children: ReactNode, items: Array<{ value: unknown; label: ReactNode }>) {
	Children.forEach(children, (child) => {
		if (isValidElement(child)) {
			const props = child.props as Record<string, unknown>;
			if (props.value !== undefined && props.children) {
				items.push({ value: props.value, label: props.children as ReactNode });
			}
			if (props.children) {
				extractItemsFromChildren(props.children as ReactNode, items);
			}
		}
	});
}

export default function Select({
	children,
	items,
	...props
}: SelectPrimitive.Root.Props<unknown, boolean | undefined>) {
	const autoItems = useMemo(() => {
		if (items) {
			return items;
		}

		const itemsArray: Array<{ value: unknown; label: ReactNode }> = [];
		extractItemsFromChildren(children, itemsArray);
		return itemsArray;
	}, [children, items]);

	return (
		<SelectPrimitive.Root {...props} items={autoItems}>
			{children}
		</SelectPrimitive.Root>
	);
}
