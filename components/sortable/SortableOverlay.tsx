"use client";

import { type UniqueIdentifier, DragOverlay, defaultDropAnimationSideEffects, type DropAnimation } from "@dnd-kit/core";
import { type ComponentProps, type ReactNode, useLayoutEffect, useState } from "react";
import * as ReactDOM from "react-dom";

import cn from "@/cn";

import SortableOverlayContext from "./SortableOverlayContext";
import useSortableContext from "./useSortableContext";

const dropAnimation: DropAnimation = {
	sideEffects: defaultDropAnimationSideEffects({
		styles: {
			active: {
				opacity: "0.4",
			},
		},
	}),
};

export default function SortableOverlay(
	props: {
		container?: Element | DocumentFragment | null;
		children?: ((params: { value: UniqueIdentifier }) => ReactNode) | ReactNode;
	} & Omit<ComponentProps<typeof DragOverlay>, "children">
) {
	const { container: containerProp, children, ...overlayProps } = props;

	const context = useSortableContext();

	const [mounted, setMounted] = useState(false);

	useLayoutEffect(() => setMounted(true), []);

	const container = containerProp ?? (mounted ? globalThis.document?.body : null);

	if (!container) {
		return null;
	}

	return ReactDOM.createPortal(
		<DragOverlay
			dropAnimation={dropAnimation}
			modifiers={context.modifiers}
			className={cn(!context.flatCursor && "cursor-grabbing")}
			{...overlayProps}
		>
			<SortableOverlayContext.Provider value={true}>
				{context.activeId
					? typeof children === "function"
						? children({ value: context.activeId })
						: children
					: null}
			</SortableOverlayContext.Provider>
		</DragOverlay>,
		container
	);
}
