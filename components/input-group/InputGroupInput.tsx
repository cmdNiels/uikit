"use client";

import cn from "@/cn";
import Input from "@/components/input/Input";

import type { ComponentProps } from "react";

export default function InputGroupInput({ className, ...props }: ComponentProps<"input">) {
	return (
		<Input
			data-slot="input-group-control"
			className={cn(
				"flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
				className
			)}
			{...props}
		/>
	);
}
