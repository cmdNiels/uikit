import { IconBold } from "@tabler/icons-react";

import Toggle from "./Toggle";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Toggle",
};

export const Default: Story<Partial<ComponentProps<typeof Toggle>>> = ({ variant, size, disabled }) => (
	<Toggle variant={variant} size={size} disabled={disabled}>
		<IconBold />
	</Toggle>
);

Default.args = {
	variant: "default",
	size: "default",
	disabled: false,
};

Default.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "outline"],
		defaultValue: "default",
	},
	size: {
		control: { type: "select" },
		options: ["default", "sm", "lg"],
		defaultValue: "default",
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};

export const WithText: Story<Partial<ComponentProps<typeof Toggle>>> = ({ variant, size, disabled, children }) => (
	<Toggle variant={variant} size={size} disabled={disabled}>
		{children}
	</Toggle>
);

WithText.args = {
	variant: "default",
	size: "default",
	disabled: false,
	children: "Toggle",
};

WithText.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "outline"],
		defaultValue: "default",
	},
	size: {
		control: { type: "select" },
		options: ["default", "sm", "lg"],
		defaultValue: "default",
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	children: {
		control: { type: "text" },
		defaultValue: "Toggle",
	},
};
