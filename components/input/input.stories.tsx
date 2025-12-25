import Input from "./Input";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Input",
};

export const Default: Story<Partial<ComponentProps<typeof Input>>> = ({
	type,
	placeholder,
	disabled,
	"aria-invalid": ariaInvalid,
}) => <Input type={type} placeholder={placeholder} disabled={disabled} aria-invalid={ariaInvalid} />;

Default.args = {
	type: "text",
	placeholder: "Enter text...",
	disabled: false,
	"aria-invalid": false,
};

Default.argTypes = {
	type: {
		control: { type: "select" },
		options: ["text", "email", "password", "number", "file"],
		defaultValue: "text",
	},
	placeholder: {
		control: { type: "text" },
		defaultValue: "Enter text...",
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
