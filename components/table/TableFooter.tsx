"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function TableFooter({ className, ...props }: ComponentProps<"tfoot">) {
	return (
		<tfoot
			data-slot="table-footer"
			className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
			{...props}
		/>
	);
}
