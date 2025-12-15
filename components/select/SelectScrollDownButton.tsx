"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { IconChevronDown } from "@tabler/icons-react";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function SelectScrollDownButton({
	className,
	...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
	return (
		<SelectPrimitive.ScrollDownArrow
			data-slot="select-scroll-down-button"
			className={cn(
				"bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
				className
			)}
			{...props}
		>
			<IconChevronDown />
		</SelectPrimitive.ScrollDownArrow>
	);
}
