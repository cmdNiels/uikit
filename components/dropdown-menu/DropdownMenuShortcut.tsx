"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function DropdownMenuShortcut({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			data-slot="dropdown-menu-shortcut"
			className={cn(
				"ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
				className
			)}
			{...props}
		/>
	);
}
