import cn from "@/cn";

import type { ComponentProps } from "react";

export default function PaginationContent({ className, ...props }: ComponentProps<"ul">) {
	return <ul data-slot="pagination-content" className={cn("flex items-center gap-0.5", className)} {...props} />;
}
