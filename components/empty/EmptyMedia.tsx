import cn from "@/cn";

import { emptyMediaVariants } from "./emptyMediaVariants";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export default function EmptyMedia({
	className,
	variant = "default",
	...props
}: ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) {
	return (
		<div
			data-slot="empty-icon"
			data-variant={variant}
			className={cn(emptyMediaVariants({ variant, className }))}
			{...props}
		/>
	);
}
