import cn from "@/cn";

import type { ComponentProps } from "react";

export default function PopoverHeader({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="popover-header" className={cn("flex flex-col gap-1 text-sm", className)} {...props} />;
}
