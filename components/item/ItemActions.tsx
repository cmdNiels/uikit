import { type ComponentProps } from "react";

import cn from "@/cn";

function ItemActions({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="item-actions" className={cn("flex items-center gap-2", className)} {...props} />;
}

export default ItemActions;
