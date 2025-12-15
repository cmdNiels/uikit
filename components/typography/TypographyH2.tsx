import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyH2 = forwardRef<HTMLHeadingElement, ComponentProps<"h2">>(({ className, children, ...props }, ref) => (
	<h2
		ref={ref}
		id={children?.toString().replace(/ /g, "-").replace(/'/g, "").replace(/\?/g, "").toLowerCase()}
		className={cn(
			"mt-10 scroll-m-28 text-xl font-medium tracking-tight first:mt-0 lg:mt-16 [&+.steps]:mt-0! [&+.steps>h3]:mt-4! [&+h3]:mt-6! [&+p]:mt-4!",
			className
		)}
		{...props}
	>
		{children}
	</h2>
));

TypographyH2.displayName = "TypographyH2";

export default TypographyH2;
