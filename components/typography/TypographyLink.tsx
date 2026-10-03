import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyLink = forwardRef<HTMLAnchorElement, ComponentProps<"a">>(({ className, ...props }, ref) => (
	<a ref={ref} className={cn("font-medium underline underline-offset-4", className)} {...props} />
));

TypographyLink.displayName = "TypographyLink";

export default TypographyLink;
