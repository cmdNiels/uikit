import { IconDots } from "@tabler/icons-react";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function PaginationEllipsis({ className, ...props }: ComponentProps<"span">) {
	return (
		<span
			aria-hidden
			data-slot="pagination-ellipsis"
			className={cn("flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4", className)}
			{...props}
		>
			<IconDots />
			<span className="sr-only">More pages</span>
		</span>
	);
}
