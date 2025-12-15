import cn from "@/cn";

import type { ComponentProps } from "react";

export default function CardTitle({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			data-slot="card-title"
			className={cn("text-base leading-normal font-medium group-data-[size=sm]/card:text-sm", className)}
			{...props}
		/>
	);
}
