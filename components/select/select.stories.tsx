import Select from "./Select";
import SelectContent from "./SelectContent";
import SelectGroup from "./SelectGroup";
import SelectItem from "./SelectItem";
import SelectTrigger from "./SelectTrigger";
import SelectValue from "./SelectValue";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Select",
};

export const Default: Story<Partial<ComponentProps<typeof SelectTrigger>>> = ({ size, disabled }) => (
	<Select>
		<SelectTrigger size={size} disabled={disabled}>
			<SelectValue />
		</SelectTrigger>
		<SelectContent>
			<SelectGroup>
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="cherry">Cherry</SelectItem>
				<SelectItem value="grape">Grape</SelectItem>
				<SelectItem value="orange">Orange</SelectItem>
			</SelectGroup>
		</SelectContent>
	</Select>
);

Default.args = {
	size: "default",
	disabled: false,
};

Default.argTypes = {
	size: {
		control: { type: "select" },
		options: ["sm", "default"],
		defaultValue: "default",
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};
