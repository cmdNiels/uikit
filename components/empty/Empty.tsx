import cn from "@/cn";

import type { ComponentProps } from "react";

export default function Empty({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="empty"
			className={cn(
				"flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-lg border-dashed p-6 text-center text-balance",
				className
			)}
			{...props}
		/>
	);
}
