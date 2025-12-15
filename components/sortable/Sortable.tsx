"use client";

import {
	type Announcements,
	closestCenter,
	closestCorners,
	defaultDropAnimationSideEffects,
	DndContext,
	type DndContextProps,
	type DragEndEvent,
	type DraggableAttributes,
	type DraggableSyntheticListeners,
	DragOverlay,
	type DragStartEvent,
	type DropAnimation,
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
	SortableContext,
	type SortableContextProps,
	sortableKeyboardCoordinates,
	useSortable,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useComposedRefs } from "motion/react";
import {
	type ComponentProps,
	type ComponentPropsWithRef,
	type ElementType,
	createContext,
	type CSSProperties,
	type ReactElement,
	type ReactNode,
	useCallback,
	cloneElement,
	useContext,
	useId,
	useLayoutEffect,
	useMemo,
	useState,
} from "react";
import * as ReactDOM from "react-dom";

import cn from "@/cn";

const orientationConfig = {
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

const ROOT_NAME = "Sortable";
const CONTENT_NAME = "SortableContent";
const ITEM_NAME = "SortableItem";
const ITEM_HANDLE_NAME = "SortableItemHandle";
const OVERLAY_NAME = "SortableOverlay";

interface SortableRootContextValue<T> {
	id: string;
	items: UniqueIdentifier[];
	modifiers: DndContextProps["modifiers"];
	strategy: SortableContextProps["strategy"];
	activeId: UniqueIdentifier | null;
	setActiveId: (id: UniqueIdentifier | null) => void;
	getItemValue: (item: T) => UniqueIdentifier;
	flatCursor: boolean;
}

const SortableRootContext = createContext<SortableRootContextValue<unknown> | null>(null);

function useSortableContext(consumerName: string) {
	const context = useContext(SortableRootContext);
	if (!context) {
		throw new Error(`\`${consumerName}\` must be used within \`${ROOT_NAME}\``);
	}
	return context;
}

interface GetItemValue<T> {
	/**
	 * Callback that returns a unique identifier for each sortable item. Required for array of objects.
	 * @example getItemValue={(item) => item.id}
	 */
	getItemValue: (item: T) => UniqueIdentifier;
}

type SortableProps<T> = DndContextProps &
	(T extends object ? GetItemValue<T> : Partial<GetItemValue<T>>) & {
		value: T[];
		onValueChange?: (items: T[]) => void;
		onMove?: (event: DragEndEvent & { activeIndex: number; overIndex: number }) => void;
		strategy?: SortableContextProps["strategy"];
		orientation?: "vertical" | "horizontal" | "mixed";
		flatCursor?: boolean;
	};

function Sortable<T>(props: SortableProps<T>) {
	const {
		value,
		onValueChange,
		collisionDetection,
		modifiers,
		strategy,
		onMove,
		orientation = "vertical",
		flatCursor = false,
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
		}),
		[id, items, modifiers, strategy, config.modifiers, config.strategy, activeId, getItemValue, flatCursor]
	);

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

const SortableContentContext = createContext<boolean>(false);

interface SortableContentProps<T extends ElementType = "div"> {
	strategy?: SortableContextProps["strategy"];
	children: ReactNode;
	render?: ReactElement<T>;
	withoutSlot?: boolean;
}

function SortableContent<T extends ElementType = "div">(props: SortableContentProps<T> & ComponentPropsWithRef<T>) {
	const { strategy: strategyProp, render, withoutSlot, children, ...contentProps } = props;

	const context = useSortableContext(CONTENT_NAME);

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

interface SortableItemContextValue {
	id: string;
	attributes: DraggableAttributes;
	listeners: DraggableSyntheticListeners | undefined;
	setActivatorNodeRef: (node: HTMLElement | null) => void;
	isDragging?: boolean;
	disabled?: boolean;
}

const SortableItemContext = createContext<SortableItemContextValue | null>(null);

function useSortableItemContext(consumerName: string) {
	const context = useContext(SortableItemContext);
	if (!context) {
		throw new Error(`\`${consumerName}\` must be used within \`${ITEM_NAME}\``);
	}
	return context;
}

interface SortableItemProps<T extends ElementType = "div"> {
	value: UniqueIdentifier;
	asHandle?: boolean;
	render?: ReactElement<T>;
	disabled?: boolean;
}

function SortableItem<T extends ElementType = "div">(props: SortableItemProps<T> & ComponentPropsWithRef<T>) {
	const { value, style, asHandle, render, disabled, className, ref, ...itemProps } = props;

	const inSortableContent = useContext(SortableContentContext);
	const inSortableOverlay = useContext(SortableOverlayContext);

	if (!inSortableContent && !inSortableOverlay) {
		throw new Error(`\`${ITEM_NAME}\` must be used within \`${CONTENT_NAME}\` or \`${OVERLAY_NAME}\``);
	}

	if (value === "") {
		throw new Error(`\`${ITEM_NAME}\` value cannot be an empty string`);
	}

	const context = useSortableContext(ITEM_NAME);
	const id = useId();
	const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
		id: value,
		disabled,
	});

	const composedRef = useComposedRefs(ref, (node: HTMLElement | null) => {
		if (disabled) {
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
			disabled,
		}),
		[id, attributes, listeners, setActivatorNodeRef, isDragging, disabled]
	);

	const mergedProps = {
		id,
		"data-disabled": disabled,
		"data-dragging": isDragging ? "" : undefined,
		"data-slot": "sortable-item",
		...itemProps,
		...(asHandle && !disabled ? attributes : {}),
		...(asHandle && !disabled ? listeners : {}),
		ref: composedRef,
		style: composedStyle,
		className: cn(
			"focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-1 focus-visible:outline-hidden dark:focus-visible:ring-neutral-300",
			{
				"touch-none select-none": asHandle,
				"cursor-default": context.flatCursor,
				"data-dragging:cursor-grabbing": !context.flatCursor,
				"cursor-grab": !isDragging && asHandle && !context.flatCursor,
				"opacity-50": isDragging,
				"pointer-events-none opacity-50": disabled,
			},
			className
		),
	};

	const element = render ? cloneElement(render, mergedProps) : <div {...mergedProps} />;

	return <SortableItemContext.Provider value={itemContext}>{element}</SortableItemContext.Provider>;
}

interface SortableItemHandleProps<T extends ElementType = "button"> {
	render?: ReactElement<T>;
}

function SortableItemHandle<T extends ElementType = "button">(
	props: SortableItemHandleProps<T> & ComponentPropsWithRef<T>
) {
	const { render, disabled, className, ...itemHandleProps } = props;

	const context = useSortableContext(ITEM_HANDLE_NAME);
	const itemContext = useSortableItemContext(ITEM_HANDLE_NAME);

	const isDisabled = disabled ?? itemContext.disabled;

	const composedRef = useComposedRefs(itemHandleProps.ref, (node: HTMLElement | null) => {
		if (!isDisabled) {
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
			"select-none disabled:pointer-events-none disabled:opacity-50",
			context.flatCursor ? "cursor-default" : "cursor-grab data-dragging:cursor-grabbing",
			className
		),
		disabled: isDisabled,
	};

	return render ? cloneElement(render, mergedProps) : <button {...mergedProps} />;
}

const SortableOverlayContext = createContext(false);

const dropAnimation: DropAnimation = {
	sideEffects: defaultDropAnimationSideEffects({
		styles: {
			active: {
				opacity: "0.4",
			},
		},
	}),
};

interface SortableOverlayProps extends Omit<ComponentProps<typeof DragOverlay>, "children"> {
	container?: Element | DocumentFragment | null;
	children?: ((params: { value: UniqueIdentifier }) => ReactNode) | ReactNode;
}

function SortableOverlay(props: SortableOverlayProps) {
	const { container: containerProp, children, ...overlayProps } = props;

	const context = useSortableContext(OVERLAY_NAME);

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

export {
	Sortable,
	SortableContent,
	SortableItem,
	SortableItemHandle,
	SortableOverlay,
	//
	type SortableProps,
};
