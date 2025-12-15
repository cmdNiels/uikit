import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyTr = forwardRef<HTMLTableRowElement, ComponentProps<"tr">>(({ className, ...props }, ref) => (
	<tr ref={ref} className={cn("m-0 border-b", className)} {...props} />
));

TypographyTr.displayName = "TypographyTr";

export default TypographyTr;
