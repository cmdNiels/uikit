import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyList = forwardRef<HTMLUListElement, ComponentProps<"ul">>(({ className, ...props }, ref) => (
	<ul ref={ref} className={cn("my-6 ml-6 list-disc", className)} {...props} />
));

TypographyList.displayName = "TypographyList";

export default TypographyList;
