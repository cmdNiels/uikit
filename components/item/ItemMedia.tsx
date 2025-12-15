import * as React from "react";

import cn from "@/cn";

import itemMediaVariants from "./itemMediaVariants";

import type { VariantProps } from "class-variance-authority";

function ItemMedia({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
	return (
		<div
			data-slot="item-media"
			data-variant={variant}
			className={cn(itemMediaVariants({ variant, className }))}
			{...props}
		/>
	);
}

export default ItemMedia;
