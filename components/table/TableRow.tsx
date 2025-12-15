"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function TableRow({ className, ...props }: ComponentProps<"tr">) {
	return (
		<tr
			data-slot="table-row"
			className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
			{...props}
		/>
	);
}
