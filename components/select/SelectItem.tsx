"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { IconCheck } from "@tabler/icons-react";
import { useContext, useEffect } from "react";

import cn from "@/cn";

import { SelectRegistryContext } from "./Select";

export default function SelectItem({ className, children, value, ...props }: SelectPrimitive.Item.Props) {
	const registry = useContext(SelectRegistryContext);

	useEffect(() => {
		if (registry && value !== undefined) {
			const label = typeof children === "string" ? children : String(children);
			registry.set(value, label);
		}
	}, [registry, value, children]);

	return (
		<SelectPrimitive.Item
			data-slot="select-item"
			className={cn(
				"relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
				className
			)}
			value={value}
			{...props}
		>
			<SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
				{children}
			</SelectPrimitive.ItemText>
			<SelectPrimitive.ItemIndicator
				render={
					<span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
				}
			>
				<IconCheck className="pointer-events-none" />
			</SelectPrimitive.ItemIndicator>
		</SelectPrimitive.Item>
	);
}
