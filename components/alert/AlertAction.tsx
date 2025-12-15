import cn from "@/cn";

import type { ComponentProps } from "react";

export default function AlertAction({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="alert-action" className={cn("absolute top-2.5 right-3", className)} {...props} />;
}
