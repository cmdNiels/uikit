import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyOl = forwardRef<HTMLOListElement, ComponentProps<"ol">>(({ className, ...props }, ref) => (
	<ol ref={ref} className={cn("my-6 ml-6 list-decimal", className)} {...props} />
));

TypographyOl.displayName = "TypographyOl";

export default TypographyOl;
