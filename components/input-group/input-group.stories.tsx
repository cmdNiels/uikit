import { IconSearch } from "@tabler/icons-react";

import InputGroup from "./InputGroup";
import InputGroupAddon from "./InputGroupAddon";
import InputGroupButton from "./InputGroupButton";
import InputGroupInput from "./InputGroupInput";
import InputGroupText from "./InputGroupText";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/InputGroup",
};

export const Default: Story<
	Partial<ComponentProps<typeof InputGroupInput>> & {
		placeholder: string;
	}
> = ({ placeholder, type }) => (
	<InputGroup>
		<InputGroupInput placeholder={placeholder} type={type} />
	</InputGroup>
);

Default.args = {
	placeholder: "Enter text...",
	type: "text",
};

Default.argTypes = {
	placeholder: {
		control: { type: "text" },
		defaultValue: "Enter text...",
	},
	type: {
		control: { type: "select" },
		options: ["text", "number"],
		defaultValue: "text",
	},
};

export const WithAddon: Story<
	Partial<ComponentProps<typeof InputGroupInput>> & {
		placeholder: string;
	}
> = ({ placeholder }) => (
	<InputGroup>
		<InputGroupAddon>@</InputGroupAddon>
		<InputGroupInput placeholder={placeholder} />
	</InputGroup>
);

WithAddon.args = {
	placeholder: "username",
};

WithAddon.argTypes = {
	placeholder: {
		control: { type: "text" },
		defaultValue: "username",
	},
};

export const WithIcon = () => (
	<InputGroup>
		<InputGroupAddon align="inline-start">
			<IconSearch />
		</InputGroupAddon>
		<InputGroupInput placeholder="Search..." />
	</InputGroup>
);

export const WithButton = () => (
	<InputGroup>
		<InputGroupInput placeholder="Search..." />
		<InputGroupButton>Search</InputGroupButton>
	</InputGroup>
);

export const WithText = () => (
	<InputGroup>
		<InputGroupText>$</InputGroupText>
		<InputGroupInput placeholder="0.00" type="number" />
	</InputGroup>
);
