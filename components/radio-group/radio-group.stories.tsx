import RadioGroup from "./RadioGroup";
import RadioGroupItem from "./RadioGroupItem";

import type { Story } from "@ladle/react";

export default {
	title: "UI/RadioGroup",
};

export const Default: Story<{ defaultValue: string; disabled: boolean }> = ({ defaultValue, disabled }) => (
	<RadioGroup defaultValue={defaultValue}>
		<div className="flex items-center gap-2">
			<RadioGroupItem id="radio-option-one" value="one" disabled={disabled} />
			<label htmlFor="radio-option-one" className="text-sm leading-none font-medium">
				Option One
			</label>
		</div>
		<div className="flex items-center gap-2">
			<RadioGroupItem id="radio-option-two" value="two" disabled={disabled} />
			<label htmlFor="radio-option-two" className="text-sm leading-none font-medium">
				Option Two
			</label>
		</div>
		<div className="flex items-center gap-2">
			<RadioGroupItem id="radio-option-three" value="three" disabled={disabled} />
			<label htmlFor="radio-option-three" className="text-sm leading-none font-medium">
				Option Three
			</label>
		</div>
	</RadioGroup>
);

Default.args = {
	defaultValue: "one",
	disabled: false,
};

Default.argTypes = {
	defaultValue: {
		control: { type: "select" },
		options: ["one", "two", "three"],
		defaultValue: "one",
	},
	disabled: {
		control: { type: "boolean" },
		defaultValue: false,
	},
};
