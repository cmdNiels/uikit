import Button from "@/components/button/Button";

import ButtonGroup from "./ButtonGroup";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/ButtonGroup",
};

export const Default: Story<Partial<ComponentProps<typeof ButtonGroup>>> = ({ orientation }) => (
	<ButtonGroup orientation={orientation}>
		<Button variant="outline">First</Button>
		<Button variant="outline">Second</Button>
		<Button variant="outline">Third</Button>
	</ButtonGroup>
);

Default.args = {
	orientation: "horizontal",
};

Default.argTypes = {
	orientation: {
		control: { type: "select" },
		options: ["horizontal", "vertical"],
		defaultValue: "horizontal",
	},
};

export const Mixed = () => (
	<ButtonGroup orientation="horizontal">
		<Button variant="default">Action</Button>
		<Button variant="outline">Edit</Button>
		<Button variant="destructive">Delete</Button>
	</ButtonGroup>
);
