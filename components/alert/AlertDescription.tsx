import cn from "@/cn";

import type { ComponentProps } from "react";

export default function AlertDescription({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-description"
			className={cn(
				"text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
				className
			)}
			{...props}
		/>
	);
}
