"use client";

import cn from "@/cn";
import Textarea from "@/components/textarea/TextArea";

import type { ComponentProps } from "react";

export default function InputGroupTextarea({ className, ...props }: ComponentProps<"textarea">) {
	return (
		<Textarea
			data-slot="input-group-control"
			className={cn(
				"flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
				className
			)}
			{...props}
		/>
	);
}
