import CopyInput from "./CopyInput";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/CopyInput",
};

export const Default: Story<Partial<ComponentProps<typeof CopyInput>>> = ({
	type,
	placeholder,
	defaultValue,
	disabled,
	"aria-invalid": ariaInvalid,
}) => (
	<CopyInput
		type={type}
		placeholder={placeholder}
		defaultValue={defaultValue}
		disabled={disabled}
		aria-invalid={ariaInvalid}
	/>
);

Default.args = {
	type: "text",
	placeholder: "Enter text...",
	defaultValue: "",
	disabled: false,
	"aria-invalid": false,
};

Default.argTypes = {
	type: {
		control: { type: "select" },
		options: ["text", "number"],
		defaultValue: "text",
	},
	placeholder: {
		control: { type: "text" },
		defaultValue: "Enter text...",
	},
	defaultValue: {
		control: { type: "text" },
		defaultValue: "",
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	"aria-invalid": {
		control: { type: "boolean" },
		defaultValue: false,
	},
};
