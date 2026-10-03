import { IconChevronRight } from "@tabler/icons-react";

import cn from "@/cn";

import PaginationLink from "./PaginationLink";

import type { ComponentProps } from "react";

export default function PaginationNext({
	className,
	text = "Next",
	...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) {
	return (
		<PaginationLink aria-label="Go to next page" size="default" className={cn("pr-1.5!", className)} {...props}>
			<span className="hidden sm:block">{text}</span>
			<IconChevronRight data-icon="inline-end" className="rtl:-scale-x-100" />
		</PaginationLink>
	);
}
