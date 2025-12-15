"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function InputGroupText({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			className={cn(
				"flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		/>
	);
}
