"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { IconChevronUp } from "@tabler/icons-react";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function SelectScrollUpButton({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
	return (
		<SelectPrimitive.ScrollUpArrow
			data-slot="select-scroll-up-button"
			className={cn(
				"top-0 z-10 flex w-full cursor-default items-center justify-center bg-card py-1 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			<IconChevronUp />
		</SelectPrimitive.ScrollUpArrow>
	);
}
