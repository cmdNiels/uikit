import { type ComponentProps } from "react";

import cn from "@/cn";

export default function BubbleGroup({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="bubble-group" className={cn("flex min-w-0 flex-col gap-2", className)} {...props} />;
}
