import { forwardRef, type HTMLAttributes } from "react";

import cn from "@/cn";

const TypographyStrong = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => (
	<strong ref={ref} className={cn("font-medium", className)} {...props} />
));

TypographyStrong.displayName = "TypographyStrong";

export default TypographyStrong;
