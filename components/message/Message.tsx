import { type ComponentProps } from "react";

import cn from "@/cn";

export default function Message({
	className,
	align = "start",
	...props
}: ComponentProps<"div"> & { align?: "start" | "end" }) {
	return (
		<div
			data-slot="message"
			data-align={align}
			className={cn(
				"group/message relative flex w-full min-w-0 gap-2 text-sm data-[align=end]:flex-row-reverse",
				className
			)}
			{...props}
		/>
	);
}
