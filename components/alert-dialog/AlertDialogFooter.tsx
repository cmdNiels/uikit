import cn from "@/cn";

import type { ComponentProps } from "react";

export default function AlertDialogFooter({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cn(
				"flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
				className
			)}
			{...props}
		/>
	);
}
