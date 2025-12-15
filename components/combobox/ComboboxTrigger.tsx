"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { IconChevronDown } from "@tabler/icons-react";

import cn from "@/cn";

export default function ComboboxTrigger({ className, children, ...props }: ComboboxPrimitive.Trigger.Props) {
	return (
		<ComboboxPrimitive.Trigger
			data-slot="combobox-trigger"
			className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
			{...props}
		>
			{children}
			<IconChevronDown className="pointer-events-none size-4 text-muted-foreground" />
		</ComboboxPrimitive.Trigger>
	);
}
