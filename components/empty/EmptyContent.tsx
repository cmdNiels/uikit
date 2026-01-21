import cn from "@/cn";

import type { ComponentProps } from "react";

export default function EmptyContent({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="empty-content"
			className={cn("flex w-full max-w-sm min-w-0 flex-col items-center gap-2.5 text-sm text-balance", className)}
			{...props}
		/>
	);
}
