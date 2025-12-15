import Link from "next/link";
import { forwardRef, type ComponentProps, type ComponentRef } from "react";

import cn from "@/cn";

const TypographyLink = forwardRef<ComponentRef<typeof Link>, ComponentProps<typeof Link>>(
	({ className, ...props }, ref) => (
		<Link ref={ref} className={cn("font-medium underline underline-offset-4", className)} {...props} />
	)
);

TypographyLink.displayName = "TypographyLink";

export default TypographyLink;
