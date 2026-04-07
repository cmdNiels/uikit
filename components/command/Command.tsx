"use client";

import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import cn from "@/cn";

export default function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
	return (
		<CommandPrimitive
			data-slot="command"
			className={cn(
				"flex size-full flex-col overflow-hidden rounded-xl! bg-card p-1 text-card-foreground",
				className
			)}
			{...props}
		/>
	);
}
