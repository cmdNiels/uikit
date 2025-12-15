import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyH6 = forwardRef<HTMLHeadingElement, ComponentProps<"h6">>(({ className, ...props }, ref) => (
	<h6 ref={ref} className={cn("mt-8 scroll-m-28 text-base font-medium tracking-tight", className)} {...props} />
));

TypographyH6.displayName = "TypographyH6";

export default TypographyH6;
