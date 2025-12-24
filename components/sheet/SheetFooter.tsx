"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function SheetFooter({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="sheet-footer" className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />;
}
