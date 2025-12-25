import Card from "./Card";
import CardAction from "./CardAction";
import CardContent from "./CardContent";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Card",
};

export const Default: Story<
	Partial<ComponentProps<typeof Card>> & {
		title: string;
		description: string;
		content: string;
	}
> = ({ size, title, description, content }) => (
	<Card size={size} className="w-96">
		<CardHeader>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardHeader>
		<CardContent>
			<p>{content}</p>
		</CardContent>
		<CardFooter>
			<p className="text-sm text-muted-foreground">Card footer</p>
		</CardFooter>
	</Card>
);

Default.args = {
	size: "default",
	title: "Card Title",
	description: "Card description goes here",
	content: "Card content area with some example text to demonstrate the layout.",
};

Default.argTypes = {
	size: {
		control: { type: "select" },
		options: ["default", "sm"],
		defaultValue: "default",
	},
	title: {
		control: { type: "text" },
		defaultValue: "Card Title",
	},
	description: {
		control: { type: "text" },
		defaultValue: "Card description goes here",
	},
	content: {
		control: { type: "text" },
		defaultValue: "Card content area with some example text to demonstrate the layout.",
	},
};

export const WithAction: Story<
	Partial<ComponentProps<typeof Card>> & {
		title: string;
		description: string;
		content: string;
		actionText: string;
	}
> = ({ size, title, description, content, actionText }) => (
	<Card size={size} className="w-96">
		<CardHeader>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardHeader>
		<CardContent>
			<p>{content}</p>
		</CardContent>
		<CardFooter>
			<CardAction>{actionText}</CardAction>
		</CardFooter>
	</Card>
);

WithAction.args = {
	size: "default",
	title: "Notification Settings",
	description: "Manage your notification preferences",
	content: "You will receive notifications for important updates.",
	actionText: "Save Changes",
};

WithAction.argTypes = {
	size: {
		control: { type: "select" },
		options: ["default", "sm"],
		defaultValue: "default",
	},
	title: {
		control: { type: "text" },
		defaultValue: "Notification Settings",
	},
	description: {
		control: { type: "text" },
		defaultValue: "Manage your notification preferences",
	},
	content: {
		control: { type: "text" },
		defaultValue: "You will receive notifications for important updates.",
	},
	actionText: {
		control: { type: "text" },
		defaultValue: "Save Changes",
	},
};
