import { type ComponentProps } from "react";

import cn from "@/cn";
import Item from "@/components/item/Item";

export default function CommandItem({
	size = "sm",
	variant = "outline",
	className,
	children,
	...props
}: ComponentProps<typeof Item>) {
	return (
		<Item
			role="listitem"
			size={size}
			variant={variant}
			className={cn("h-16 cursor-default transition-none", "data-[selected=true]:bg-muted", className)}
			tabIndex={-1}
			{...props}
		>
			{children}
		</Item>
	);
}
