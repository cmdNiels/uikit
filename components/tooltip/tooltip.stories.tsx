import Button from "@/components/button/Button";

import Tooltip from "./Tooltip";
import TooltipContent from "./TooltipContent";
import TooltipTrigger from "./TooltipTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Tooltip",
};

export const Default: Story<
	Partial<ComponentProps<typeof TooltipContent>> & {
		content: string;
		buttonText: string;
	}
> = ({ side, content, buttonText }) => (
	<Tooltip>
		<TooltipTrigger>
			<Button variant="outline">{buttonText}</Button>
		</TooltipTrigger>
		<TooltipContent side={side}>{content}</TooltipContent>
	</Tooltip>
);

Default.args = {
	side: "top",
	content: "This is a tooltip",
	buttonText: "Hover me",
};

Default.argTypes = {
	side: {
		control: { type: "select" },
		options: ["top", "bottom", "left", "right"],
		defaultValue: "top",
	},
	content: {
		control: { type: "text" },
		defaultValue: "This is a tooltip",
	},
	buttonText: {
		control: { type: "text" },
		defaultValue: "Hover me",
	},
};
