import Item from "./Item";
import ItemActions from "./ItemActions";
import ItemContent from "./ItemContent";
import ItemDescription from "./ItemDescription";
import ItemMedia from "./ItemMedia";
import ItemTitle from "./ItemTitle";

export default {
	title: "UI/Item",
};

export const Default = () => (
	<Item className="w-[350px]">
		<ItemContent>
			<ItemTitle>Item Title</ItemTitle>
			<ItemDescription>This is a description of the item</ItemDescription>
		</ItemContent>
	</Item>
);

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

export const Small = () => (
	<Item size="sm" className="w-[300px]">
		<ItemContent>
			<ItemTitle>Small Item</ItemTitle>
			<ItemDescription>Compact size variant</ItemDescription>
		</ItemContent>
	</Item>
);

export const ExtraSmall = () => (
	<Item size="xs" className="w-[250px]">
		<ItemContent>
			<ItemTitle>Extra Small Item</ItemTitle>
			<ItemDescription>Very compact size variant</ItemDescription>
		</ItemContent>
	</Item>
);

export const Outline = () => (
	<Item variant="outline" className="w-[350px]">
		<ItemContent>
			<ItemTitle>Outline Variant</ItemTitle>
			<ItemDescription>Item with border</ItemDescription>
		</ItemContent>
	</Item>
);

export const Muted = () => (
	<Item variant="muted" className="w-[350px]">
		<ItemContent>
			<ItemTitle>Muted Variant</ItemTitle>
			<ItemDescription>Subtle background variant</ItemDescription>
		</ItemContent>
	</Item>
);
