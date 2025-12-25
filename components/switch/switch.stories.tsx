import Switch from "./Switch";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Switch",
};

export const Default: Story<Partial<ComponentProps<typeof Switch>>> = ({ size, defaultChecked, disabled }) => (
	<Switch size={size} defaultChecked={defaultChecked} disabled={disabled} />
);

Default.args = {
	size: "default",
	defaultChecked: false,
	disabled: false,
};

Default.argTypes = {
	size: {
		control: { type: "select" },
		options: ["sm", "default"],
		defaultValue: "default",
	},
	defaultChecked: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};

export const WithLabel: Story<Partial<ComponentProps<typeof Switch>>> = ({ size, defaultChecked, disabled }) => (
	<div className="flex items-center space-x-2">
		<Switch id="airplane-mode" size={size} defaultChecked={defaultChecked} disabled={disabled} />
		<label htmlFor="airplane-mode" className="text-sm leading-none font-medium">
			Airplane Mode
		</label>
	</div>
);

WithLabel.args = {
	size: "default",
	defaultChecked: false,
	disabled: false,
};

WithLabel.argTypes = {
	size: {
		control: { type: "select" },
		options: ["sm", "default"],
		defaultValue: "default",
	},
	defaultChecked: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};
