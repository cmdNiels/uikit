import Item from "./Item";
import ItemActions from "./ItemActions";
import ItemContent from "./ItemContent";
import ItemDescription from "./ItemDescription";
import ItemMedia from "./ItemMedia";
import ItemTitle from "./ItemTitle";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Item",
};

export const Default: Story<
	Partial<ComponentProps<typeof Item>> & {
		title: string;
		description: string;
	}
> = ({ variant, size, title, description }) => (
	<Item variant={variant} size={size} className="w-[350px]">
		<ItemContent>
			<ItemTitle>{title}</ItemTitle>
			<ItemDescription>{description}</ItemDescription>
		</ItemContent>
	</Item>
);

Default.args = {
	variant: "default",
	size: "default",
	title: "Item Title",
	description: "This is a description of the item",
};

Default.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "outline", "muted"],
		defaultValue: "default",
	},
	size: {
		control: { type: "select" },
		options: ["default", "sm", "xs"],
		defaultValue: "default",
	},
	title: {
		control: { type: "text" },
		defaultValue: "Item Title",
	},
	description: {
		control: { type: "text" },
		defaultValue: "This is a description of the item",
	},
};

export const WithMedia = () => (
	<Item className="w-[350px]">
		<ItemMedia>
			<div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
				<span className="font-semibold text-primary">A</span>
			</div>
		</ItemMedia>
		<ItemContent>
			<ItemTitle>Avatar Item</ItemTitle>
			<ItemDescription>Item with media element</ItemDescription>
		</ItemContent>
	</Item>
);

export const WithActions = () => (
	<Item className="w-[350px]">
		<ItemContent>
			<ItemTitle>Actionable Item</ItemTitle>
			<ItemDescription>This item has actions</ItemDescription>
		</ItemContent>
		<ItemActions>
			<button className="text-sm text-primary">Edit</button>
		</ItemActions>
	</Item>
);
