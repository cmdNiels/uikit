import Checkbox from "./Checkbox";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Checkbox",
};

export const Default: Story<Partial<ComponentProps<typeof Checkbox>>> = ({ defaultChecked, disabled }) => (
	<Checkbox defaultChecked={defaultChecked} disabled={disabled} />
);

Default.args = {
	defaultChecked: false,
	disabled: false,
};

Default.argTypes = {
	defaultChecked: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};
