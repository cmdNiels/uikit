import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import cn from "@/cn";

import { badgeVariants } from "./badgeVariants";

import type { VariantProps } from "class-variance-authority";

export default function Badge({
	className,
	variant = "default",
	render,
	...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(
			{
				className: cn(badgeVariants({ className, variant })),
			},
			props
		),
		render,
		state: {
			slot: "badge",
			variant,
		},
	});
}
