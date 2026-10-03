import { IconChevronLeft } from "@tabler/icons-react";

import cn from "@/cn";

import PaginationLink from "./PaginationLink";

import type { ComponentProps } from "react";

export default function PaginationPrevious({
	className,
	text = "Previous",
	...props
}: ComponentProps<typeof PaginationLink> & { text?: string }) {
	return (
		<PaginationLink aria-label="Go to previous page" size="default" className={cn("pl-1.5!", className)} {...props}>
			<IconChevronLeft data-icon="inline-start" className="rtl:-scale-x-100" />
			<span className="hidden sm:block">{text}</span>
		</PaginationLink>
	);
}
