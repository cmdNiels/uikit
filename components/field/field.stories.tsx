import InputGroupInput from "@/components/input-group/InputGroupInput";

import Field from "./Field";
import FieldDescription from "./FieldDescription";
import FieldError from "./FieldError";
import FieldLabel from "./FieldLabel";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Field",
};

export const Default: Story<
	Partial<ComponentProps<typeof Field>> & {
		label: string;
		description: string;
		hasError: boolean;
		errorMessage: string;
	}
> = ({ orientation, label, description, hasError, errorMessage }) => (
	<Field orientation={orientation} className="w-[400px]">
		<FieldLabel>{label}</FieldLabel>
		{orientation === "vertical" ? (
			<>
				<InputGroupInput placeholder={`Enter ${label.toLowerCase()}`} aria-invalid={hasError} />
				{hasError ? (
					<FieldError>{errorMessage}</FieldError>
				) : (
					<FieldDescription>{description}</FieldDescription>
				)}
			</>
		) : (
			<div className="flex-1">
				<InputGroupInput placeholder={`Enter ${label.toLowerCase()}`} aria-invalid={hasError} />
				{hasError ? (
					<FieldError>{errorMessage}</FieldError>
				) : (
					<FieldDescription>{description}</FieldDescription>
				)}
			</div>
		)}
	</Field>
);

Default.args = {
	orientation: "vertical",
	label: "Email",
	description: "We'll never share your email with anyone.",
	hasError: false,
	errorMessage: "This field is required",
};

Default.argTypes = {
	orientation: {
		control: { type: "select" },
		options: ["vertical", "horizontal", "responsive"],
		defaultValue: "vertical",
	},
	label: {
		control: { type: "text" },
		defaultValue: "Email",
	},
	description: {
		control: { type: "text" },
		defaultValue: "We'll never share your email with anyone.",
	},
	hasError: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	errorMessage: {
		control: { type: "text" },
		defaultValue: "This field is required",
	},
};
