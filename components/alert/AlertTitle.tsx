import cn from "@/cn";

import type { ComponentProps } from "react";

export default function AlertTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-title"
			className={cn(
				"font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
				className
			)}
			{...props}
		/>
	);
}
