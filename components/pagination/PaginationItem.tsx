import type { ComponentProps } from "react";

export default function PaginationItem({ ...props }: ComponentProps<"li">) {
	return <li data-slot="pagination-item" {...props} />;
}
