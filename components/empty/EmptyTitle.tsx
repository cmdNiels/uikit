import cn from "@/cn";

import type { ComponentProps } from "react";

export default function EmptyTitle({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="empty-title" className={cn("text-sm font-medium tracking-tight", className)} {...props} />;
}
