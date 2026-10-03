import { type ComponentProps } from "react";

import cn from "@/cn";
import ItemGroup from "@/components/item/ItemGroup";

export default function CommandList({ className, ...props }: ComponentProps<typeof ItemGroup>) {
	return (
		<ItemGroup
			data-slot="command-list"
			className={cn(
				"scrollbar-none max-h-72 scroll-py-1 scroll-pt-10 gap-1 overflow-x-hidden overflow-y-auto rounded-md pt-10 outline-none",
				className
			)}
			{...props}
		/>
	);
}
