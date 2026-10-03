import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import cn from "@/cn";

import statusIndicatorVariants from "./statusIndicatorVariants";

import type { VariantProps } from "class-variance-authority";

export default function StatusIndicator({
	className,
	variant = "default",
	render,
	...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof statusIndicatorVariants>) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(
			{
				className: cn(statusIndicatorVariants({ className, variant })),
				children: (
					<>
						<span className="absolute inline-flex size-full animate-ping rounded-full bg-current opacity-75" />
						<span className="relative inline-flex size-full rounded-full bg-current" />
					</>
				),
			},
			props
		),
		render,
		state: {
			slot: "status-indicator",
			variant,
		},
	});
}
