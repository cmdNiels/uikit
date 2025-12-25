import Textarea from "./Textarea";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Textarea",
};

export const Default: Story<Partial<ComponentProps<typeof Textarea>>> = ({
	placeholder,
	rows,
	disabled,
	defaultValue,
}) => (
	<Textarea
		placeholder={placeholder}
		rows={rows}
		disabled={disabled}
		defaultValue={defaultValue}
		className="w-[350px]"
	/>
);

Default.args = {
	placeholder: "Type your message here...",
	rows: 4,
	disabled: false,
	defaultValue: "",
};

Default.argTypes = {
	placeholder: {
		control: { type: "text" },
		defaultValue: "Type your message here...",
	},
	rows: {
		control: { type: "number" },
		defaultValue: 4,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	defaultValue: {
		control: { type: "text" },
		defaultValue: "",
	},
};
