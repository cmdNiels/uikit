import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyLi = forwardRef<HTMLLIElement, ComponentProps<"li">>(({ className, ...props }, ref) => (
	<li ref={ref} className={cn("mt-2", className)} {...props} />
));

TypographyLi.displayName = "TypographyLi";

export default TypographyLi;
