import Checkbox from "@/components/checkbox/Checkbox";

import Label from "./Label";

export default {
	title: "UI/Label",
};

export const Default = () => <Label>Label Text</Label>;

export const WithCheckbox = () => (
	<div className="flex items-center gap-2">
		<Checkbox id="terms" />
		<Label htmlFor="terms">Accept terms and conditions</Label>
	</div>
);
