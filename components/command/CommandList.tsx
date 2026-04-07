"use client";

import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import cn from "@/cn";

export default function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
	return (
		<CommandPrimitive.List
			data-slot="command-list"
			className={cn(
				"scrollbar-none max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
				className
			)}
			{...props}
		/>
	);
}
