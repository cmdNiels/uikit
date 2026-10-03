import { type ComponentProps } from "react";

import cn from "@/cn";

export default function DialogHeader({ className, ...props }: ComponentProps<"div">) {
	return <div data-slot="dialog-header" className={cn("flex flex-col gap-2", className)} {...props} />;
}
