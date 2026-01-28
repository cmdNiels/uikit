"use client";

import { type UniqueIdentifier, type DraggableAttributes, type DraggableSyntheticListeners } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useComposedRefs } from "motion/react";
import {
	type ComponentPropsWithRef,
	type CSSProperties,
	type ElementType,
	type ReactElement,
	cloneElement,
	createContext,
	useContext,
	useId,
	useMemo,
} from "react";

import cn from "@/cn";

import SortableContentContext from "./SortableContentContext";
import SortableOverlayContext from "./SortableOverlayContext";
import useSortableContext from "./useSortableContext";

export interface SortableItemContextValue {
	id: string;
	attributes: DraggableAttributes;
	listeners: DraggableSyntheticListeners | undefined;
	setActivatorNodeRef: (node: HTMLElement | null) => void;
	isDragging?: boolean;
	disabled?: boolean;
}

export const SortableItemContext = createContext<SortableItemContextValue | null>(null);

export default function SortableItem<T extends ElementType = "div">(
	props: {
		value: UniqueIdentifier;
		asHandle?: boolean;
		render?: ReactElement<T>;
		disabled?: boolean;
	} & ComponentPropsWithRef<T>
) {
	const { value, style, asHandle, render, disabled, className, ref, ...itemProps } = props;

	const inSortableContent = useContext(SortableContentContext);
	const inSortableOverlay = useContext(SortableOverlayContext);

	if (!inSortableContent && !inSortableOverlay) {
		throw new Error("`SortableItem` must be used within `SortableContent` or `SortableOverlay`");
	}

	if (value === "") {
		throw new Error("`SortableItem` value cannot be an empty string");
	}

	const context = useSortableContext();
	const id = useId();
	const isDisabled = disabled ?? context.disabled;
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
		id: value,
		disabled: isDisabled,
	});

	const composedRef = useComposedRefs(ref, (node: HTMLElement | null) => {
		if (isDisabled) {
			return;
		}
		setNodeRef(node);
		if (asHandle) {
			setActivatorNodeRef(node);
		}
	});

	const composedStyle = useMemo<CSSProperties>(
		() => ({
			transform: CSS.Translate.toString(transform),
			transition,
			...style,
		}),
		[transform, transition, style]
	);

	const itemContext = useMemo<SortableItemContextValue>(
		() => ({
			id,
			attributes,
			listeners,
			setActivatorNodeRef,
			isDragging,
			disabled: isDisabled,
		}),
		[id, attributes, listeners, setActivatorNodeRef, isDragging, isDisabled]
	);

	const mergedProps = {
		id,
		"data-disabled": isDisabled,
		"data-dragging": isDragging ? "" : undefined,
		"data-slot": "sortable-item",
		...itemProps,
		...(asHandle && !isDisabled ? attributes : {}),
		...(asHandle && !isDisabled ? listeners : {}),
		ref: composedRef,
		style: composedStyle,
		className: cn(
			"focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-1 focus-visible:outline-hidden dark:focus-visible:ring-neutral-300",
			{
				"touch-none select-none": asHandle && !isDisabled,
				"cursor-default": context.flatCursor || isDisabled,
				"data-dragging:cursor-grabbing": !context.flatCursor && !isDisabled,
				"cursor-grab": !isDragging && asHandle && !context.flatCursor && !isDisabled,
				"opacity-50": isDragging,
			},
			className
		),
	};

	const element = render ? cloneElement(render, mergedProps) : <div {...mergedProps} />;

	return <SortableItemContext.Provider value={itemContext}>{element}</SortableItemContext.Provider>;
}
