import { type ComponentProps } from "react";

import cn from "@/cn";

export default function KbdGroup({ className, ...props }: ComponentProps<"div">) {
	return <kbd data-slot="kbd-group" className={cn("inline-flex items-center gap-1", className)} {...props} />;
}
