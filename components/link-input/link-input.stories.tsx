import LinkInput from "./LinkInput";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/LinkInput",
};

export const Default: Story<Partial<ComponentProps<typeof LinkInput>>> = ({
	placeholder,
	defaultValue,
	disabled,
	"aria-invalid": ariaInvalid,
}) => (
	<LinkInput placeholder={placeholder} defaultValue={defaultValue} disabled={disabled} aria-invalid={ariaInvalid} />
);

Default.args = {
	placeholder: "Enter text...",
	defaultValue: "",
	disabled: false,
	"aria-invalid": false,
};

Default.argTypes = {
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
