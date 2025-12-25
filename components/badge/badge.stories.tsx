import Badge from "./Badge";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Badge",
};

export const Default: Story<Partial<ComponentProps<typeof Badge>>> = ({ variant, children }) => (
	<Badge variant={variant}>{children}</Badge>
);

Default.args = {
	variant: "default",
	children: "Badge",
};

Default.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
		defaultValue: "default",
	},
	children: {
		control: { type: "text" },
		defaultValue: "Badge",
	},
};
