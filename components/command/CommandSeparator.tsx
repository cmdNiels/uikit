"use client";

import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import cn from "@/cn";

export default function CommandSeparator({
	className,
	...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
	return (
		<CommandPrimitive.Separator
			data-slot="command-separator"
			className={cn("-mx-1 h-px bg-border", className)}
			{...props}
		/>
	);
}
