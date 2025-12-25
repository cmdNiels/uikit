import Checkbox from "@/components/checkbox/Checkbox";

import Label from "./Label";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Label",
};

export const Default: Story<Partial<ComponentProps<typeof Label>>> = ({ children }) => <Label>{children}</Label>;

Default.args = {
	children: "Label Text",
};

Default.argTypes = {
	children: {
		control: { type: "text" },
		defaultValue: "Label Text",
	},
};

export const WithCheckbox: Story<Partial<ComponentProps<typeof Label>>> = ({ children }) => (
	<div className="flex items-center gap-2">
		<Checkbox id="terms" />
		<Label htmlFor="terms">{children}</Label>
	</div>
);

WithCheckbox.args = {
	children: "Accept terms and conditions",
};

WithCheckbox.argTypes = {
	children: {
		control: { type: "text" },
		defaultValue: "Accept terms and conditions",
	},
};
