import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyH3 = forwardRef<HTMLHeadingElement, ComponentProps<"h3">>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn("mt-12 scroll-m-28 text-lg font-medium tracking-tight [&+p]:mt-4! *:[code]:text-xl", className)}
		{...props}
	/>
));

TypographyH3.displayName = "TypographyH3";

export default TypographyH3;
