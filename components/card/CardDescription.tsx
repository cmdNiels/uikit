import cn from "@/cn";

import type { ComponentProps } from "react";

export default function CardDescription({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="card-description" className={cn("text-sm text-muted-foreground", className)} {...props} />;
}
