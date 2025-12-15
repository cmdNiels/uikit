import cn from "@/cn";
import Separator from "@/components/separator/Separator";

import type { ComponentProps } from "react";

export default function ButtonGroupSeparator({
	className,
	orientation = "vertical",
	...props
}: ComponentProps<typeof Separator>) {
	return (
		<Separator
			data-slot="button-group-separator"
			orientation={orientation}
			className={cn(
				"relative self-stretch bg-input data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto",
				className
			)}
			{...props}
		/>
	);
}
