import cn from "@/cn";

import type { ComponentProps } from "react";

function ItemGroup({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			role="list"
			data-slot="item-group"
			className={cn(
				"group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
				className
			)}
			{...props}
		/>
	);
}

export default ItemGroup;
