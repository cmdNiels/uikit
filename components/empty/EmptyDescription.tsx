import cn from "@/cn";

import type { ComponentProps } from "react";

export default function EmptyDescription({ className, ...props }: ComponentProps<"p">) {
	return (
		<div
			data-slot="empty-description"
			className={cn(
				"text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
				className
			)}
			{...props}
		/>
	);
}
