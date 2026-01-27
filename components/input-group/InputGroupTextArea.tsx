"use client";

import cn from "@/cn";
import TextArea from "@/components/textarea/TextArea";

import type { ComponentProps } from "react";

export default function InputGroupTextArea({ className, ...props }: ComponentProps<"textarea">) {
	return (
		<TextArea
			data-slot="input-group-control"
			className={cn(
				"flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
				className
			)}
			{...props}
		/>
	);
}
