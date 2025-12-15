import { type ComponentProps, forwardRef } from "react";

import cn from "@/cn";

const TypographyA = forwardRef<HTMLAnchorElement, ComponentProps<"a">>(({ className, ...props }, ref) => (
	<a ref={ref} className={cn("font-medium underline underline-offset-4", className)} {...props} />
));

TypographyA.displayName = "TypographyA";

export default TypographyA;
