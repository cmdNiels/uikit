"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { IconX } from "@tabler/icons-react";

import cn from "@/cn";
import InputGroupButton from "@/components/input-group/InputGroupButton";

export default function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
	return (
		<ComboboxPrimitive.Clear
			data-slot="combobox-clear"
			render={<InputGroupButton variant="ghost" size="icon-xs" />}
			className={cn(className)}
			{...props}
		>
			<IconX className="pointer-events-none" />
		</ComboboxPrimitive.Clear>
	);
}
