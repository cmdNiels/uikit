import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";

import cn from "@/cn";

import tabsListVariants from "./tabsListVariants";

import type { VariantProps } from "class-variance-authority";

export default function TabsList({
	className,
	variant = "default",
	...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			data-variant={variant}
			className={cn(tabsListVariants({ variant }), className)}
			{...props}
		/>
	);
}
