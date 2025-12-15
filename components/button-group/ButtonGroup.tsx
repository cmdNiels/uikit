import cn from "@/cn";

import buttonGroupVariants from "./buttonGroupVariants";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export default function ButtonGroup({
	className,
	orientation,
	...props
}: ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>) {
	return (
		<div
			role="group"
			data-slot="button-group"
			data-orientation={orientation}
			className={cn(buttonGroupVariants({ orientation }), className)}
			{...props}
		/>
	);
}
