import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyH5 = forwardRef<HTMLHeadingElement, ComponentProps<"h5">>(({ className, ...props }, ref) => (
	<h5 ref={ref} className={cn("mt-8 scroll-m-28 text-base font-medium tracking-tight", className)} {...props} />
));

TypographyH5.displayName = "TypographyH5";

export default TypographyH5;
