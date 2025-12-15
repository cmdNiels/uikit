"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function TableHead({ className, ...props }: ComponentProps<"th">) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				"h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
				className
			)}
			{...props}
		/>
	);
}
