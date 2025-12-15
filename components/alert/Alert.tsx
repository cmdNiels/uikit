import cn from "@/cn";

import { alertVariants } from "./alertVariants";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export default function Alert({
	className,
	variant,
	...props
}: ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
	return <div data-slot="alert" role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
}
