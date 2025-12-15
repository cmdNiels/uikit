import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyPre = forwardRef<HTMLPreElement, ComponentProps<"pre">>(({ className, children, ...props }, ref) => (
	<pre
		ref={ref}
		className={cn(
			"scrollbar-hidden min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-data-highlighted-line:px-0 has-data-line-numbers:px-0 has-data-[slot=tabs]:p-0",
			className
		)}
		{...props}
	>
		{children}
	</pre>
));

TypographyPre.displayName = "TypographyPre";

export default TypographyPre;
