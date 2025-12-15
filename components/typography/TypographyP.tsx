import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyP = forwardRef<HTMLParagraphElement, ComponentProps<"p">>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn("leading-relaxed not-first:mt-6", className)} {...props} />
));

TypographyP.displayName = "TypographyP";

export default TypographyP;
