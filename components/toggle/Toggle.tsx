"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";

import cn from "@/cn";

import { toggleVariants } from "./toggleVariants";

import type { VariantProps } from "class-variance-authority";

export default function Toggle({
	className,
	variant = "default",
	size = "default",
	...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
	return (
		<TogglePrimitive data-slot="toggle" className={cn(toggleVariants({ variant, size, className }))} {...props} />
	);
}
