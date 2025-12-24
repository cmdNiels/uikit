"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function SheetHeader({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="sheet-header" className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />;
}
