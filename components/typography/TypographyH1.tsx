import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyH1 = forwardRef<HTMLHeadingElement, ComponentProps<"h1">>(({ className, ...props }, ref) => (
	<h1 ref={ref} className={cn("mt-2 scroll-m-28 text-3xl font-bold tracking-tight", className)} {...props} />
));

TypographyH1.displayName = "TypographyH1";

export default TypographyH1;
