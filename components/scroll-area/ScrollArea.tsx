"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import cn from "@/cn";

import ScrollBar from "./ScrollBar";

export default function ScrollArea({ className, children, ...props }: ScrollAreaPrimitive.Root.Props) {
	return (
		<ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn("relative", className)} {...props}>
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
}
