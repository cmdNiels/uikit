import { IconHome } from "@tabler/icons-react";

import Button from "./Button";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Button",
};

export const Default: Story<Partial<ComponentProps<typeof Button>>> = ({
	variant,
	size,
	loading,
	disabled,
	children,
}) => (
	<Button variant={variant} size={size} loading={loading} disabled={disabled}>
		{children}
	</Button>
);

Default.args = {
	variant: "default",
	size: "default",
	loading: false,
	disabled: false,
	children: "Button",
};

Default.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "destructive", "outline", "secondary", "ghost", "link", "none"],
		defaultValue: "default",
	},
	size: {
		control: { type: "select" },
		options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
		defaultValue: "default",
	},
	loading: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	children: {
		control: { type: "text" },
		defaultValue: "Button",
	},
};

export const WithIcon: Story<Partial<ComponentProps<typeof Button>>> = ({ variant, size, loading, disabled }) => (
	<Button variant={variant} size={size} loading={loading} disabled={disabled}>
		<IconHome />
		Button
	</Button>
);

WithIcon.args = {
	variant: "default",
	size: "default",
	loading: false,
	disabled: false,
};

WithIcon.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "destructive", "outline", "secondary", "ghost", "link", "none"],
		defaultValue: "default",
	},
	size: {
		control: { type: "select" },
		options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
		defaultValue: "default",
	},
	loading: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};
