"use client";

import { SortableContext, type SortableContextProps } from "@dnd-kit/sortable";
import { type ComponentPropsWithRef, type ElementType, type ReactElement, type ReactNode, cloneElement } from "react";

import SortableContentContext from "./SortableContentContext";
import useSortableContext from "./useSortableContext";

export default function SortableContent<T extends ElementType = "div">(
	props: {
		strategy?: SortableContextProps["strategy"];
		children: ReactNode;
		render?: ReactElement<T>;
		withoutSlot?: boolean;
	} & ComponentPropsWithRef<T>
) {
	const { strategy: strategyProp, render, withoutSlot, children, ...contentProps } = props;

	const context = useSortableContext();

	const element = render ? (
		cloneElement(render, {
			...contentProps,
			...render.props,
			children,
			"data-slot": "sortable-content",
		})
	) : (
		<div data-slot="sortable-content" {...contentProps}>
			{children}
		</div>
	);

	return (
		<SortableContentContext.Provider value={true}>
			<SortableContext items={context.items} strategy={strategyProp ?? context.strategy}>
				{withoutSlot ? children : element}
			</SortableContext>
		</SortableContentContext.Provider>
	);
}
