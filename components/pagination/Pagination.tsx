import cn from "@/cn";

import type { ComponentProps } from "react";

export default function Pagination({ className, ...props }: ComponentProps<"nav">) {
	return (
		<nav
			role="navigation"
			aria-label="pagination"
			data-slot="pagination"
			className={cn("mx-auto flex w-full justify-center", className)}
			{...props}
		/>
	);
}
