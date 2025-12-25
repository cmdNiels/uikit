import Button from "@/components/button/Button";

import Popover from "./Popover";
import PopoverContent from "./PopoverContent";
import PopoverHeader from "./PopoverHeader";
import PopoverTitle from "./PopoverTitle";
import PopoverTrigger from "./PopoverTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Popover",
};

export const Default: Story<
	Partial<ComponentProps<typeof PopoverContent>> & {
		title: string;
		content: string;
		buttonText: string;
	}
> = ({ side, title, content, buttonText }) => (
	<Popover>
		<PopoverTrigger>
			<Button variant="outline">{buttonText}</Button>
		</PopoverTrigger>
		<PopoverContent side={side}>
			<PopoverHeader>
				<PopoverTitle>{title}</PopoverTitle>
			</PopoverHeader>
			<p>{content}</p>
		</PopoverContent>
	</Popover>
);

Default.args = {
	side: "bottom",
	title: "Popover Title",
	content: "This is some content inside the popover.",
	buttonText: "Open Popover",
};

Default.argTypes = {
	side: {
		control: { type: "select" },
		options: ["top", "bottom", "left", "right"],
		defaultValue: "bottom",
	},
	title: {
		control: { type: "text" },
		defaultValue: "Popover Title",
	},
	content: {
		control: { type: "text" },
		defaultValue: "This is some content inside the popover.",
	},
	buttonText: {
		control: { type: "text" },
		defaultValue: "Open Popover",
	},
};
