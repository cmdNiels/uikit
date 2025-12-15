"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function FieldSet({ className, ...props }: ComponentProps<"fieldset">) {
	return (
		<fieldset
			data-slot="field-set"
			className={cn(
				"flex flex-col gap-6 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
				className
			)}
			{...props}
		/>
	);
}
