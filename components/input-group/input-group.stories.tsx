import { IconSearch } from "@tabler/icons-react";

import InputGroup from "./InputGroup";
import InputGroupAddon from "./InputGroupAddon";
import InputGroupButton from "./InputGroupButton";
import InputGroupInput from "./InputGroupInput";
import InputGroupText from "./InputGroupText";
import InputGroupTextarea from "./InputGroupTextarea";

export default {
	title: "UI/InputGroup",
};

export const Default = () => (
	<InputGroup className="w-[300px]">
		<InputGroupInput placeholder="Enter text..." />
	</InputGroup>
);

export const WithAddonPrefix = () => (
	<InputGroup className="w-[300px]">
		<InputGroupAddon>@</InputGroupAddon>
		<InputGroupInput placeholder="username" />
	</InputGroup>
);

export const WithAddonSuffix = () => (
	<InputGroup className="w-[300px]">
		<InputGroupInput placeholder="amount" />
		<InputGroupAddon>.00</InputGroupAddon>
	</InputGroup>
);

export const WithText = () => (
	<InputGroup className="w-[300px]">
		<InputGroupText>$</InputGroupText>
		<InputGroupInput placeholder="0.00" type="number" />
	</InputGroup>
);

export const WithButton = () => (
	<InputGroup className="w-[300px]">
		<InputGroupInput placeholder="Search..." />
		<InputGroupButton>Search</InputGroupButton>
	</InputGroup>
);

export const WithTextarea = () => (
	<InputGroup className="w-[300px]">
		<InputGroupTextarea placeholder="Enter your message..." rows={4} />
	</InputGroup>
);

export const WithIcon = () => (
	<InputGroup className="w-[300px]">
		<InputGroupAddon align="inline-start">
			<IconSearch />
		</InputGroupAddon>
		<InputGroupInput placeholder="Search..." />
	</InputGroup>
);

export const WithInlineEndAddon = () => (
	<InputGroup className="w-[300px]">
		<InputGroupInput placeholder="Enter URL..." />
		<InputGroupAddon align="inline-end">.com</InputGroupAddon>
	</InputGroup>
);

export const WithBlockStartAddon = () => (
	<InputGroup className="w-[300px]">
		<InputGroupAddon align="block-start">Label</InputGroupAddon>
		<InputGroupInput placeholder="Enter value..." />
	</InputGroup>
);

export const WithBlockEndAddon = () => (
	<InputGroup className="w-[300px]">
		<InputGroupInput placeholder="Enter value..." />
		<InputGroupAddon align="block-end">Helper text</InputGroupAddon>
	</InputGroup>
);
