"use client";

import { IconGripVertical } from "@tabler/icons-react";
import { useState } from "react";

import Sortable from "./Sortable";
import SortableContent from "./SortableContent";
import SortableItem from "./SortableItem";
import SortableItemHandle from "./SortableItemHandle";
import SortableOverlay from "./SortableOverlay";

export default {
	title: "UI/Sortable",
};

function VerticalExample() {
	const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);

	return (
		<Sortable value={items} onValueChange={setItems} orientation="vertical">
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
}

export const Vertical = () => <VerticalExample />;

function HorizontalExample() {
	const [items, setItems] = useState(["A", "B", "C", "D", "E"]);

	return (
		<Sortable value={items} onValueChange={setItems} orientation="horizontal">
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
}

export const Horizontal = () => <HorizontalExample />;

interface Task {
	id: string;
	name: string;
}

function WithHandleExample() {
	const [items, setItems] = useState<Task[]>([
		{ id: "1", name: "Task 1" },
		{ id: "2", name: "Task 2" },
		{ id: "3", name: "Task 3" },
	]);

	return (
		<Sortable value={items} onValueChange={setItems} getItemValue={(item) => item.id} orientation="vertical">
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
}

export const WithHandle = () => <WithHandleExample />;
