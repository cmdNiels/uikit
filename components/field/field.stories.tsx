import InputGroupInput from "@/components/input-group/InputGroupInput";

import Field from "./Field";
import FieldDescription from "./FieldDescription";
import FieldError from "./FieldError";
import FieldLabel from "./FieldLabel";

export default {
	title: "UI/Field",
};

export const Default = () => (
	<Field className="w-[300px]">
		<FieldLabel>Email</FieldLabel>
		<InputGroupInput type="email" placeholder="Enter your email" />
		<FieldDescription>We&apos;ll never share your email with anyone.</FieldDescription>
	</Field>
);

export const WithError = () => (
	<Field className="w-[300px]">
		<FieldLabel>Username</FieldLabel>
		<InputGroupInput aria-invalid placeholder="Enter username" />
		<FieldError>Username is required</FieldError>
	</Field>
);

export const Horizontal = () => (
	<Field orientation="horizontal" className="w-[400px]">
		<FieldLabel>Name</FieldLabel>
		<div className="flex-1">
			<InputGroupInput placeholder="Enter your name" />
			<FieldDescription>Enter your full name</FieldDescription>
		</div>
	</Field>
);

export const Responsive = () => (
	<Field orientation="responsive" className="w-[400px]">
		<FieldLabel>Bio</FieldLabel>
		<div className="flex-1">
			<InputGroupInput placeholder="Tell us about yourself" />
			<FieldDescription>This will be displayed on your profile</FieldDescription>
		</div>
	</Field>
);
