import cn from "@/cn";

import inputGroupAddonVariants from "./inputGroupAddonVariants";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export default function InputGroupAddon({
	className,
	align = "inline-start",
	tabIndex = -1,
	...props
}: ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
	return (
		<div
			role="group"
			data-slot="input-group-addon"
			data-align={align}
			tabIndex={tabIndex}
			className={cn(inputGroupAddonVariants({ align }), className)}
			onClick={(e) => {
				if ((e.target as HTMLElement).closest("button")) {
					return;
				}
				e.currentTarget.parentElement?.querySelector("input")?.focus();
			}}
			{...props}
		/>
	);
}
