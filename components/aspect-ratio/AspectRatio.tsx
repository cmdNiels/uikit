import cn from "@/cn";

import type { ComponentProps, CSSProperties } from "react";

export default function AspectRatio({ ratio, className, ...props }: ComponentProps<"div"> & { ratio: number }) {
	return (
		<div
			data-slot="aspect-ratio"
			style={
				{
					"--ratio": ratio,
				} as CSSProperties
			}
			className={cn("relative aspect-(--ratio)", className)}
			{...props}
		/>
	);
}
