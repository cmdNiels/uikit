"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function Table({ className, ...props }: ComponentProps<"table">) {
	return (
		<div data-slot="table-container" className="relative size-full overflow-x-auto">
			<table data-slot="table" className={cn("w-full caption-bottom text-sm", className)} {...props} />
		</div>
	);
}
