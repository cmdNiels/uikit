"use client";

import { useComposedRefs } from "motion/react";
import { type ComponentPropsWithRef, type ElementType, type ReactElement, cloneElement } from "react";

import cn from "@/cn";

import useSortableContext from "./useSortableContext";
import useSortableItemContext from "./useSortableItemContext";

export default function SortableItemHandle<T extends ElementType = "button">(
	props: {
		render?: ReactElement<T>;
	} & ComponentPropsWithRef<T>
) {
	const { render, disabled, className, ...itemHandleProps } = props;

	const context = useSortableContext();
	const itemContext = useSortableItemContext();

	const isDisabled = disabled ?? itemContext.disabled;

	const composedRef = useComposedRefs(itemHandleProps.ref, (node: HTMLElement | null) => {
		if (isDisabled) {
			return;
		}
		itemContext.setActivatorNodeRef(node);
	});

	const mergedProps = {
		type: "button" as const,
		"aria-controls": itemContext.id,
		"data-disabled": isDisabled,
		"data-dragging": itemContext.isDragging ? "" : undefined,
		"data-slot": "sortable-item-handle",
		...itemHandleProps,
		...(isDisabled ? {} : itemContext.attributes),
		...(isDisabled ? {} : itemContext.listeners),
		ref: composedRef,
		className: cn(
			"select-none disabled:pointer-events-none",
			context.flatCursor ? "cursor-default" : "cursor-grab data-dragging:cursor-grabbing",
			className
		),
		disabled: isDisabled,
	};

	return render ? cloneElement(render, mergedProps) : <button {...mergedProps} />;
}
