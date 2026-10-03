import { type ComponentProps, forwardRef } from "react";

import cn from "@/cn";

const TypographyA = forwardRef<HTMLAnchorElement, ComponentProps<"a">>(
	({ className, href, target, rel, ...props }, ref) => {
		if (href?.startsWith("https://")) {
			return (
				<a
					ref={ref}
					href={href}
					className={cn("font-medium underline underline-offset-4", className)}
					target={target ?? "_blank"}
					rel={rel ?? "noopener noreferrer"}
					{...props}
				/>
			);
		} else {
			return (
				<a
					ref={ref}
					href={href}
					className={cn("font-medium underline underline-offset-4", className)}
					target={target}
					rel={rel}
					{...props}
				/>
			);
		}
	}
);

TypographyA.displayName = "TypographyA";

export default TypographyA;
