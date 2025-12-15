"use client";

import cn from "@/cn";

import fieldVariants from "./fieldVariants";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export default function Field({
	className,
	orientation = "vertical",
	...props
}: ComponentProps<"div"> & VariantProps<typeof fieldVariants>) {
	return (
		<div
			role="group"
			data-slot="field"
			data-orientation={orientation}
			className={cn(fieldVariants({ orientation }), className)}
			{...props}
		/>
	);
}
