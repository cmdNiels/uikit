import Alert from "./Alert";
import AlertAction from "./AlertAction";
import AlertDescription from "./AlertDescription";
import AlertTitle from "./AlertTitle";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Alert",
};

export const Default: Story<
	Partial<ComponentProps<typeof Alert>> & {
		title: string;
		description: string;
	}
> = ({ variant, title, description }) => (
	<Alert variant={variant} className="w-96">
		<AlertTitle>{title}</AlertTitle>
		<AlertDescription>{description}</AlertDescription>
	</Alert>
);

Default.args = {
	variant: "default",
	title: "Heads up!",
	description: "You can add components to your app using the cli.",
};

Default.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "destructive"],
		defaultValue: "default",
	},
	title: {
		control: { type: "text" },
		defaultValue: "Heads up!",
	},
	description: {
		control: { type: "text" },
		defaultValue: "You can add components to your app using the cli.",
	},
};

export const WithAction: Story<
	Partial<ComponentProps<typeof Alert>> & {
		title: string;
		description: string;
		actionText: string;
	}
> = ({ variant, title, description, actionText }) => (
	<Alert variant={variant} className="w-96">
		<AlertTitle>{title}</AlertTitle>
		<AlertDescription>{description}</AlertDescription>
		<AlertAction>{actionText}</AlertAction>
	</Alert>
);

WithAction.args = {
	variant: "default",
	title: "Update Available",
	description: "A new version of the app is available.",
	actionText: "Update Now",
};

WithAction.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "destructive"],
		defaultValue: "default",
	},
	title: {
		control: { type: "text" },
		defaultValue: "Update Available",
	},
	description: {
		control: { type: "text" },
		defaultValue: "A new version of the app is available.",
	},
	actionText: {
		control: { type: "text" },
		defaultValue: "Update Now",
	},
};
