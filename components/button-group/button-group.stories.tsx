import Button from "@/components/button/Button";

import ButtonGroup from "./ButtonGroup";

export default {
	title: "UI/ButtonGroup",
};

export const Horizontal = () => (
	<ButtonGroup orientation="horizontal">
		<Button variant="outline">Left</Button>
		<Button variant="outline">Middle</Button>
		<Button variant="outline">Right</Button>
	</ButtonGroup>
);

export const Vertical = () => (
	<ButtonGroup orientation="vertical">
		<Button variant="outline">Top</Button>
		<Button variant="outline">Middle</Button>
		<Button variant="outline">Bottom</Button>
	</ButtonGroup>
);

export const Mixed = () => (
	<ButtonGroup orientation="horizontal">
		<Button variant="default">Action</Button>
		<Button variant="outline">Edit</Button>
		<Button variant="destructive">Delete</Button>
	</ButtonGroup>
);
