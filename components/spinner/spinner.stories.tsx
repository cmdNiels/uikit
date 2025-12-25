import Spinner from "./Spinner";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Spinner",
};

export const Default: Story<
	Partial<ComponentProps<typeof Spinner>> & {
		size: "sm" | "md" | "lg" | "xl";
		color: string;
	}
> = ({ size, color }) => {
	const sizeClasses = {
		sm: "size-3",
		md: "size-6",
		lg: "size-8",
		xl: "size-12",
	};

	return <Spinner className={`${sizeClasses[size]} ${color}`} />;
};

Default.args = {
	size: "md",
	color: "",
};

Default.argTypes = {
	size: {
		control: { type: "select" },
		options: ["sm", "md", "lg", "xl"],
		defaultValue: "md",
	},
	color: {
		control: { type: "text" },
		defaultValue: "",
	},
};
