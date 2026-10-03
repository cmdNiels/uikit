import { type ComponentProps } from "react";

import cn from "@/cn";

import bubbleReactionsVariants from "./bubbleReactionsVariants";

export default function BubbleReactions({
	side = "bottom",
	align = "end",
	className,
	...props
}: ComponentProps<"div"> & {
	align?: "start" | "end";
	side?: "top" | "bottom";
}) {
	return (
		<div
			data-slot="bubble-reactions"
			data-align={align}
			data-side={side}
			className={cn(bubbleReactionsVariants({ side, align }), className)}
			{...props}
		/>
	);
}
