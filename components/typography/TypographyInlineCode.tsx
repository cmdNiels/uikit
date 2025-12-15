import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyInlineCode = forwardRef<HTMLElement, ComponentProps<"code">>(
	({ className, children, ...props }, ref) => {
		// Inline Code.
		if (typeof children === "string") {
			return (
				<code
					ref={ref}
					className={cn(
						"relative rounded-md bg-neutral-100 px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] wrap-break-word outline-none dark:bg-neutral-800",
						className
					)}
					{...props}
				>
					{children}
				</code>
			);
		}

		// Default codeblock.
		return (
			<code ref={ref} {...props}>
				{children}
			</code>
		);
	}
);

TypographyInlineCode.displayName = "TypographyInlineCode";

export default TypographyInlineCode;
