import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Label from "@/components/label/Label";
import TextArea from "@/components/textarea/TextArea";

import Dialog from "./Dialog";
import DialogClose from "./DialogClose";
import DialogContent from "./DialogContent";
import DialogDescription from "./DialogDescription";
import DialogFooter from "./DialogFooter";
import DialogHeader from "./DialogHeader";
import DialogTitle from "./DialogTitle";
import DialogTrigger from "./DialogTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Dialog",
};

export const Default: Story<
	Partial<ComponentProps<typeof DialogContent>> & {
		title: string;
		description: string;
		buttonText: string;
		showCloseButton: boolean;
	}
> = ({ title, description, buttonText, showCloseButton }) => (
	<Dialog>
		<DialogTrigger render={<Button variant="outline">{buttonText}</Button>} />
		<DialogContent showCloseButton={showCloseButton}>
			<DialogHeader>
				<DialogTitle>{title}</DialogTitle>
				<DialogDescription>{description}</DialogDescription>
			</DialogHeader>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<Label htmlFor="dialog-demo-name">Name</Label>
					<Input id="dialog-demo-name" placeholder="Enter your name" />
				</div>
				<div className="grid gap-3">
					<Label htmlFor="dialog-demo-email">Email</Label>
					<Input id="dialog-demo-email" type="email" placeholder="Enter your email" />
				</div>
				<div className="grid gap-3">
					<Label htmlFor="dialog-demo-email">Email</Label>
					<TextArea id="dialog-demo-email" placeholder="Enter your email" />
				</div>
			</div>
			<DialogFooter>
				<DialogClose render={<Button variant="outline">Cancel</Button>} />
				<Button>Save changes</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>
);

Default.args = {
	title: "Edit Profile",
	description: "Make changes to your profile here. Click save when you're done.",
	buttonText: "Open Dialog",
	showCloseButton: true,
};

Default.argTypes = {
	title: {
		control: { type: "text" },
		defaultValue: "Edit Profile",
	},
	description: {
		control: { type: "text" },
		defaultValue: "Make changes to your profile here. Click save when you're done.",
	},
	buttonText: {
		control: { type: "text" },
		defaultValue: "Open Dialog",
	},
	showCloseButton: {
		control: { type: "boolean" },
		defaultValue: true,
	},
};
