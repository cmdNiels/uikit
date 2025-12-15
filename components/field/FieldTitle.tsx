"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function FieldTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="field-label"
			className={cn(
				"flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
				className
			)}
			{...props}
		/>
	);
}
