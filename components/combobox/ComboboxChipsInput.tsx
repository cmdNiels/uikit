"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";

import cn from "@/cn";

export default function ComboboxChipsInput({ className, children, ...props }: ComboboxPrimitive.Input.Props) {
	return (
		<ComboboxPrimitive.Input
			data-slot="combobox-chip-input"
			className={cn("min-w-16 flex-1 outline-none", className)}
			{...props}
		/>
	);
}
