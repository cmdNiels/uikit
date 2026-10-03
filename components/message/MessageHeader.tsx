import { type ComponentProps } from "react";

import cn from "@/cn";

export default function MessageHeader({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="message-header"
			className={cn(
				"flex max-w-full min-w-0 items-center px-3 text-xs font-medium text-muted-foreground group-has-data-[variant=ghost]/message:px-0",
				className
			)}
			{...props}
		/>
	);
}
