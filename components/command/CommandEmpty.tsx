import { type ComponentProps } from "react";

import cn from "@/cn";

export default function CommandEmpty({ className, children, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="command-empty"
			className={cn("flex h-16 items-center justify-center px-3 py-2.5 text-center text-sm", className)}
			{...props}
		>
			<span className="text-card-foreground">{children}</span>
		</div>
	);
}
