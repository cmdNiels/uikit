import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyH4 = forwardRef<HTMLHeadingElement, ComponentProps<"h4">>(({ className, ...props }, ref) => (
	<h4 ref={ref} className={cn("mt-8 scroll-m-28 text-base font-medium tracking-tight", className)} {...props} />
));

TypographyH4.displayName = "TypographyH4";

export default TypographyH4;
