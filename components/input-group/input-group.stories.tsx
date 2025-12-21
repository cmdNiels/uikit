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
	<InputGroup>
		<InputGroupInput placeholder="Enter text..." />
	</InputGroup>
);

export const WithAddonPrefix = () => (
	<InputGroup>
		<InputGroupAddon>@</InputGroupAddon>
		<InputGroupInput placeholder="username" />
	</InputGroup>
);

export const WithAddonSuffix = () => (
	<InputGroup>
		<InputGroupInput placeholder="amount" />
		<InputGroupAddon>.00</InputGroupAddon>
	</InputGroup>
);

export const WithText = () => (
	<InputGroup>
		<InputGroupText>$</InputGroupText>
		<InputGroupInput placeholder="0.00" type="number" />
	</InputGroup>
);

export const WithButton = () => (
	<InputGroup>
		<InputGroupInput placeholder="Search..." />
		<InputGroupButton>Search</InputGroupButton>
	</InputGroup>
);

export const WithTextarea = () => (
	<InputGroup>
		<InputGroupTextarea placeholder="Enter your message..." rows={4} />
	</InputGroup>
);

export const WithIcon = () => (
	<InputGroup>
		<InputGroupAddon align="inline-start">
			<IconSearch />
		</InputGroupAddon>
		<InputGroupInput placeholder="Search..." />
	</InputGroup>
);

export const WithInlineEndAddon = () => (
	<InputGroup>
		<InputGroupInput placeholder="Enter URL..." />
		<InputGroupAddon align="inline-end">.com</InputGroupAddon>
	</InputGroup>
);

export const WithBlockStartAddon = () => (
	<InputGroup>
		<InputGroupAddon align="block-start">Label</InputGroupAddon>
		<InputGroupInput placeholder="Enter value..." />
	</InputGroup>
);

export const WithBlockEndAddon = () => (
	<InputGroup>
		<InputGroupInput placeholder="Enter value..." />
		<InputGroupAddon align="block-end">Helper text</InputGroupAddon>
	</InputGroup>
);
