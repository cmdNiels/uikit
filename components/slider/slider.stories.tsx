import Slider from "./Slider";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Slider",
};

export const Default: Story<Partial<ComponentProps<typeof Slider>>> = ({
	min,
	max,
	defaultValue,
	disabled,
	orientation,
}) => <Slider min={min} max={max} defaultValue={defaultValue} disabled={disabled} orientation={orientation} />;

Default.args = {
	min: 0,
	max: 100,
	defaultValue: [50],
	disabled: false,
	orientation: "horizontal",
};

Default.argTypes = {
	min: {
		control: { type: "number" },
		defaultValue: 0,
	},
	max: {
		control: { type: "number" },
		defaultValue: 100,
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	orientation: {
		control: { type: "select" },
		options: ["horizontal", "vertical"],
		defaultValue: "horizontal",
	},
};
