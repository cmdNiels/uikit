import StatusIndicator from "./StatusIndicator";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/StatusIndicator",
};

export const Default: Story<Partial<ComponentProps<typeof StatusIndicator>>> = ({ variant }) => (
	<StatusIndicator variant={variant} />
);

Default.args = {
	variant: "default",
};

Default.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "warning", "destructive"],
		defaultValue: "default",
	},
};
