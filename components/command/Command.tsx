import { type ComponentProps } from "react";

import cn from "@/cn";

export default function Command({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="command"
			className={cn(
				"flex size-full flex-col gap-2 overflow-hidden rounded-xl! bg-card p-2 text-card-foreground",
				className
			)}
			{...props}
		/>
	);
}
