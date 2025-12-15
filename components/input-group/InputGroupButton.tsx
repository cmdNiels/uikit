"use client";

import cn from "@/cn";
import Button from "@/components/button/Button";

import inputGroupButtonVariants from "./inputGroupButtonVariants";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export default function InputGroupButton({
	className,
	type = "button",
	variant = "ghost",
	size = "xs",
	...props
}: Omit<ComponentProps<typeof Button>, "size" | "type"> &
	VariantProps<typeof inputGroupButtonVariants> & {
		type?: "button" | "submit" | "reset";
	}) {
	return (
		<Button
			type={type}
			data-size={size}
			variant={variant}
			className={cn(inputGroupButtonVariants({ size }), className)}
			{...props}
		/>
	);
}
