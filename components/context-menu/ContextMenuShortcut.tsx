"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function ContextMenuShortcut({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			data-slot="context-menu-shortcut"
			className={cn(
				"ml-auto text-xs tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground",
				className
			)}
			{...props}
		/>
	);
}
