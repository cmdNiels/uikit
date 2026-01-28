"use client";

import { IconGripVertical } from "@tabler/icons-react";
import { useState, type ComponentProps } from "react";

import Sortable from "./Sortable";
import SortableContent from "./SortableContent";
import SortableItem from "./SortableItem";
import SortableItemHandle from "./SortableItemHandle";
import SortableOverlay from "./SortableOverlay";

import type { Story } from "@ladle/react";

export default {
	title: "UI/Sortable",
};

export const Vertical: Story<Partial<ComponentProps<typeof Sortable>>> = ({ orientation, flatCursor, disabled }) => {
	const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);

	return (
		<Sortable
			value={items}
			onValueChange={setItems}
			orientation={orientation}
			flatCursor={flatCursor}
			disabled={disabled}
		>
			<SortableContent className="flex flex-col gap-2">
				{items.map((item) => (
					<SortableItem
						key={item}
						value={item}
						asHandle
						className="flex items-center gap-2 rounded-md border border-border bg-card p-4"
					>
						<IconGripVertical className="size-4 text-muted-foreground" />
						<span>{item}</span>
					</SortableItem>
				))}
			</SortableContent>
			<SortableOverlay>
				{({ value }) => (
					<div className="flex items-center gap-2 rounded-md border border-border bg-card p-4">
						<IconGripVertical className="size-4 text-muted-foreground" />
						<span>{value}</span>
					</div>
				)}
			</SortableOverlay>
		</Sortable>
	);
};

Vertical.args = {
	orientation: "vertical",
	flatCursor: false,
	disabled: false,
};

Vertical.argTypes = {
	orientation: {
		control: { type: "select" },
		options: ["vertical", "horizontal", "mixed"],
		defaultValue: "vertical",
	},
	flatCursor: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};

export const Horizontal: Story<Partial<ComponentProps<typeof Sortable>>> = ({ orientation, flatCursor, disabled }) => {
	const [items, setItems] = useState(["A", "B", "C", "D", "E"]);

	return (
		<Sortable
			value={items}
			onValueChange={setItems}
			orientation={orientation}
			flatCursor={flatCursor}
			disabled={disabled}
		>
			<SortableContent className="flex gap-2">
				{items.map((item) => (
					<SortableItem
						key={item}
						value={item}
						asHandle
						className="flex size-16 items-center justify-center rounded-md border border-border bg-card"
					>
						<span className="font-semibold">{item}</span>
					</SortableItem>
				))}
			</SortableContent>
			<SortableOverlay>
				{({ value }) => (
					<div className="flex size-16 items-center justify-center rounded-md border border-border bg-card">
						<span className="font-semibold">{value}</span>
					</div>
				)}
			</SortableOverlay>
		</Sortable>
	);
};

Horizontal.args = {
	orientation: "horizontal",
	flatCursor: false,
	disabled: false,
};

Horizontal.argTypes = {
	orientation: {
		control: { type: "select" },
		options: ["vertical", "horizontal", "mixed"],
		defaultValue: "horizontal",
	},
	flatCursor: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};

interface Task {
	id: string;
	name: string;
}

export const WithHandle: Story<Partial<ComponentProps<typeof Sortable>>> = ({ orientation, flatCursor, disabled }) => {
	const [items, setItems] = useState<Task[]>([
		{ id: "1", name: "Task 1" },
		{ id: "2", name: "Task 2" },
		{ id: "3", name: "Task 3" },
	]);

	return (
		<Sortable
			value={items}
			onValueChange={setItems}
			getItemValue={(item) => item.id}
			orientation={orientation}
			flatCursor={flatCursor}
			disabled={disabled}
		>
			<SortableContent className="flex flex-col gap-2">
				{items.map((item) => (
					<SortableItem
						key={item.id}
						value={item.id}
						className="flex items-center gap-3 rounded-md border border-border bg-card p-4"
					>
						<SortableItemHandle>
							<IconGripVertical className="size-4" />
						</SortableItemHandle>
						<span>{item.name}</span>
					</SortableItem>
				))}
			</SortableContent>
			<SortableOverlay>
				{({ value }) => {
					const item = items.find((i) => i.id === value);
					return item ? (
						<div className="flex items-center gap-3 rounded-md border border-border bg-card p-4">
							<IconGripVertical className="size-4" />
							<span>{item.name}</span>
						</div>
					) : null;
				}}
			</SortableOverlay>
		</Sortable>
	);
};

WithHandle.args = {
	orientation: "vertical",
	flatCursor: false,
	disabled: false,
};

WithHandle.argTypes = {
	orientation: {
		control: { type: "select" },
		options: ["vertical", "horizontal", "mixed"],
		defaultValue: "vertical",
	},
	flatCursor: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};
