"use client";

import {
	type Announcements,
	closestCenter,
	closestCorners,
	DndContext,
	type DndContextProps,
	type DragEndEvent,
	type DragStartEvent,
	KeyboardSensor,
	MouseSensor,
	type ScreenReaderInstructions,
	TouchSensor,
	type UniqueIdentifier,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis, restrictToParentElement, restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
	arrayMove,
	horizontalListSortingStrategy,
	type SortableContextProps,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useCallback, useId, useMemo, useState } from "react";

import SortableRootContext from "./SortableRootContext";

export const orientationConfig = {
	vertical: {
		modifiers: [restrictToVerticalAxis, restrictToParentElement],
		strategy: verticalListSortingStrategy,
		collisionDetection: closestCenter,
	},
	horizontal: {
		modifiers: [restrictToHorizontalAxis, restrictToParentElement],
		strategy: horizontalListSortingStrategy,
		collisionDetection: closestCenter,
	},
	mixed: {
		modifiers: [restrictToParentElement],
		strategy: undefined,
		collisionDetection: closestCorners,
	},
};

export interface SortableRootContextValue<T> {
	id: string;
	items: UniqueIdentifier[];
	modifiers: DndContextProps["modifiers"];
	strategy: SortableContextProps["strategy"];
	activeId: UniqueIdentifier | null;
	setActiveId: (id: UniqueIdentifier | null) => void;
	getItemValue: (item: T) => UniqueIdentifier;
	flatCursor: boolean;
	disabled: boolean;
}

export default function Sortable<T>(
	props: DndContextProps &
		(T extends object
			? {
					/**
					 * Callback that returns a unique identifier for each sortable item. Required for array of objects.
					 * @example getItemValue={(item) => item.id}
					 */
					getItemValue: (item: T) => UniqueIdentifier;
				}
			: {
					/**
					 * Callback that returns a unique identifier for each sortable item. Required for array of objects.
					 * @example getItemValue={(item) => item.id}
					 */
					getItemValue?: (item: T) => UniqueIdentifier;
				}) & {
			value: T[];
			onValueChange?: (items: T[]) => void;
			onMove?: (event: DragEndEvent & { activeIndex: number; overIndex: number }) => void;
			strategy?: SortableContextProps["strategy"];
			orientation?: "vertical" | "horizontal" | "mixed";
			flatCursor?: boolean;
			disabled?: boolean;
		}
) {
	const {
		value,
		onValueChange,
		collisionDetection,
		modifiers,
		strategy,
		onMove,
		orientation = "vertical",
		flatCursor = false,
		disabled = false,
		getItemValue: getItemValueProp,
		accessibility,
		onDragStart: onDragStartProp,
		onDragEnd: onDragEndProp,
		onDragCancel: onDragCancelProp,
		...sortableProps
	} = props;

	const id = useId();
	const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);
	const config = useMemo(() => orientationConfig[orientation], [orientation]);

	const getItemValue = useCallback(
		(item: T): UniqueIdentifier => {
			if (typeof item === "object" && !getItemValueProp) {
				throw new Error("`getItemValue` is required when using array of objects");
			}
			return getItemValueProp ? getItemValueProp(item) : (item as UniqueIdentifier);
		},
		[getItemValueProp]
	);

	const items = useMemo(() => value.map((item) => getItemValue(item)), [value, getItemValue]);

	const onDragStart = useCallback(
		(event: DragStartEvent) => {
			onDragStartProp?.(event);

			if (event.activatorEvent.defaultPrevented) {
				return;
			}

			setActiveId(event.active.id);
		},
		[onDragStartProp]
	);

	const onDragEnd = useCallback(
		(event: DragEndEvent) => {
			onDragEndProp?.(event);

			if (event.activatorEvent.defaultPrevented) {
				return;
			}

			const { active, over } = event;
			if (over && active.id !== over?.id) {
				const activeIndex = value.findIndex((item) => getItemValue(item) === active.id);
				const overIndex = value.findIndex((item) => getItemValue(item) === over.id);

				if (onMove) {
					onMove({ ...event, activeIndex, overIndex });
				} else {
					onValueChange?.(arrayMove(value, activeIndex, overIndex));
				}
			}
			setActiveId(null);
		},
		[value, onValueChange, onMove, getItemValue, onDragEndProp]
	);

	const onDragCancel = useCallback(
		(event: DragEndEvent) => {
			onDragCancelProp?.(event);

			if (event.activatorEvent.defaultPrevented) {
				return;
			}

			setActiveId(null);
		},
		[onDragCancelProp]
	);

	const announcements: Announcements = useMemo(
		() => ({
			onDragStart({ active }) {
				const activeValue = active.id.toString();
				return `Grabbed sortable item "${activeValue}". Current position is ${active.data.current?.sortable.index + 1} of ${value.length}. Use arrow keys to move, space to drop.`;
			},
			onDragOver({ active, over }) {
				if (over) {
					const overIndex = over.data.current?.sortable.index ?? 0;
					const activeIndex = active.data.current?.sortable.index ?? 0;
					const moveDirection = overIndex > activeIndex ? "down" : "up";
					const activeValue = active.id.toString();
					return `Sortable item "${activeValue}" moved ${moveDirection} to position ${overIndex + 1} of ${value.length}.`;
				}
				return "Sortable item is no longer over a droppable area. Press escape to cancel.";
			},
			onDragEnd({ active, over }) {
				const activeValue = active.id.toString();
				if (over) {
					const overIndex = over.data.current?.sortable.index ?? 0;
					return `Sortable item "${activeValue}" dropped at position ${overIndex + 1} of ${value.length}.`;
				}
				return `Sortable item "${activeValue}" dropped. No changes were made.`;
			},
			onDragCancel({ active }) {
				const activeIndex = active.data.current?.sortable.index ?? 0;
				const activeValue = active.id.toString();
				return `Sorting cancelled. Sortable item "${activeValue}" returned to position ${activeIndex + 1} of ${value.length}.`;
			},
			onDragMove({ active, over }) {
				if (over) {
					const overIndex = over.data.current?.sortable.index ?? 0;
					const activeIndex = active.data.current?.sortable.index ?? 0;
					const moveDirection = overIndex > activeIndex ? "down" : "up";
					const activeValue = active.id.toString();
					return `Sortable item "${activeValue}" is moving ${moveDirection} to position ${overIndex + 1} of ${value.length}.`;
				}
				return "Sortable item is no longer over a droppable area. Press escape to cancel.";
			},
		}),
		[value]
	);

	const screenReaderInstructions: ScreenReaderInstructions = useMemo(
		() => ({
			draggable: `
        To pick up a sortable item, press space or enter.
        While dragging, use the ${orientation === "vertical" ? "up and down" : orientation === "horizontal" ? "left and right" : "arrow"} keys to move the item.
        Press space or enter again to drop the item in its new position, or press escape to cancel.
      `,
		}),
		[orientation]
	);

	const contextValue = useMemo(
		() => ({
			id,
			items,
			modifiers: modifiers ?? config.modifiers,
			strategy: strategy ?? config.strategy,
			activeId,
			setActiveId,
			getItemValue,
			flatCursor,
			disabled,
		}),
		[
			id,
			items,
			modifiers,
			strategy,
			config.modifiers,
			config.strategy,
			activeId,
			getItemValue,
			flatCursor,
			disabled,
		]
	);

	if (disabled) {
		return (
			<SortableRootContext.Provider value={contextValue as SortableRootContextValue<unknown>}>
				{sortableProps.children}
			</SortableRootContext.Provider>
		);
	}

	return (
		<SortableRootContext.Provider value={contextValue as SortableRootContextValue<unknown>}>
			<DndContext
				collisionDetection={collisionDetection ?? config.collisionDetection}
				modifiers={modifiers ?? config.modifiers}
				sensors={sensors}
				{...sortableProps}
				id={id}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				onDragCancel={onDragCancel}
				accessibility={{
					announcements,
					screenReaderInstructions,
					...accessibility,
				}}
			/>
		</SortableRootContext.Provider>
	);
}
