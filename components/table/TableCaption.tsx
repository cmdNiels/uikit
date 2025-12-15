"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function TableCaption({ className, ...props }: ComponentProps<"caption">) {
	return (
		<caption data-slot="table-caption" className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
	);
}
