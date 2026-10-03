import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

import cn from "@/cn";

import bubbleVariants from "./bubbleVariants";

export default function Bubble({
	variant = "default",
	align = "start",
	className,
	...props
}: ComponentProps<"div"> &
	VariantProps<typeof bubbleVariants> & {
		align?: "start" | "end";
	}) {
	return (
		<div
			data-slot="bubble"
			data-variant={variant}
			data-align={align}
			className={cn(bubbleVariants({ variant }), className)}
			{...props}
		/>
	);
}
