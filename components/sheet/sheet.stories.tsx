import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Label from "@/components/label/Label";

import Sheet from "./Sheet";
import SheetClose from "./SheetClose";
import SheetContent from "./SheetContent";
import SheetDescription from "./SheetDescription";
import SheetFooter from "./SheetFooter";
import SheetHeader from "./SheetHeader";
import SheetTitle from "./SheetTitle";
import SheetTrigger from "./SheetTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Sheet",
};

export const Default: Story<
	Partial<ComponentProps<typeof SheetContent>> & {
		title: string;
		description: string;
		buttonText: string;
	}
> = ({ side, title, description, buttonText }) => (
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">{buttonText}</Button>
		</SheetTrigger>
		<SheetContent side={side}>
			<SheetHeader>
				<SheetTitle>{title}</SheetTitle>
				<SheetDescription>{description}</SheetDescription>
			</SheetHeader>
			<div className="grid flex-1 auto-rows-min gap-6 px-4">
				<div className="grid gap-3">
					<Label htmlFor="sheet-demo-username">Username</Label>
					<Input id="sheet-demo-username" defaultValue="@cmdNiels" />
				</div>
			</div>
			<SheetFooter>
				<Button type="submit">Save changes</Button>
				<SheetClose render={<Button variant="outline">Close</Button>} />
			</SheetFooter>
		</SheetContent>
	</Sheet>
);

Default.args = {
	side: "right",
	title: "Sheet Title",
	description: "This is a description of the sheet. You can add any content here.",
	buttonText: "Open Sheet",
};

Default.argTypes = {
	side: {
		control: { type: "select" },
		options: ["top", "bottom", "left", "right"],
		defaultValue: "right",
	},
	title: {
		control: { type: "text" },
		defaultValue: "Sheet Title",
	},
	description: {
		control: { type: "text" },
		defaultValue: "This is a description of the sheet. You can add any content here.",
	},
	buttonText: {
		control: { type: "text" },
		defaultValue: "Open Sheet",
	},
};
