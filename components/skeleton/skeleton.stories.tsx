import Skeleton from "./Skeleton";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Skeleton",
};

export const Default: Story<
	Partial<ComponentProps<typeof Skeleton>> & {
		width: string;
		height: string;
		rounded: "default" | "full" | "xl";
	}
> = ({ width, height, rounded }) => {
	const roundedClass = {
		default: "",
		full: "rounded-full",
		xl: "rounded-xl",
	};

	return <Skeleton className={`${roundedClass[rounded]}`} style={{ width, height }} />;
};

Default.args = {
	width: "250px",
	height: "48px",
	rounded: "default",
};

Default.argTypes = {
	width: {
		control: { type: "text" },
		defaultValue: "250px",
	},
	height: {
		control: { type: "text" },
		defaultValue: "48px",
	},
	rounded: {
		control: { type: "select" },
		options: ["default", "full", "xl"],
		defaultValue: "default",
	},
};

export const Card = () => (
	<div className="flex flex-col space-y-3">
		<Skeleton className="h-[125px] w-[250px] rounded-xl" />
		<div className="space-y-2">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
		</div>
	</div>
);

export const List = () => (
	<div className="space-y-2">
		<div className="flex items-center space-x-4">
			<Skeleton className="size-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
		<div className="flex items-center space-x-4">
			<Skeleton className="size-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	</div>
);
