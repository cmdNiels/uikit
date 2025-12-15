import cn from "@/cn";

import type { ComponentProps } from "react";

export default function AlertDialogMedia({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-media"
			className={cn(
				"mb-2 inline-flex size-16 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
				className
			)}
			{...props}
		/>
	);
}
