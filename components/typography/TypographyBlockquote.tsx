import { type ComponentProps, forwardRef } from "react";

import cn from "@/cn";

const TypographyBlockquote = forwardRef<HTMLQuoteElement, ComponentProps<"blockquote">>(
	({ className, ...props }, ref) => (
		<blockquote ref={ref} className={cn("mt-6 border-l-2 pl-6 italic", className)} {...props} />
	)
);

TypographyBlockquote.displayName = "TypographyBlockquote";

export default TypographyBlockquote;
