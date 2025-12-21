import { Button as ButtonPrimitive } from "@base-ui/react/button";

import cn from "@/cn";
import Spinner from "@/components/spinner/Spinner";

import { buttonVariants } from "./buttonVariants";

import type { VariantProps } from "class-variance-authority";

export default function Button({
	className,
	children,
	variant = "default",
	size = "default",
	loading = false,
	disabled,
	...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants> & { loading?: boolean }) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }), "relative")}
			disabled={disabled ?? loading}
			{...props}
		>
			{loading && <Spinner className="absolute inset-0 m-auto" />}
			<span className={cn(loading ? "invisible relative" : "")}>{children}</span>
		</ButtonPrimitive>
	);
}
