import cn from "@/cn";

import type { ComponentProps } from "react";

export default function Skeleton({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="skeleton" className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}
