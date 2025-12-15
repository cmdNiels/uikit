import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyFigure = forwardRef<HTMLElement, ComponentProps<"figure">>(({ className, ...props }, ref) => (
	<figure ref={ref} className={cn(className)} {...props} />
));

TypographyFigure.displayName = "TypographyFigure";

export default TypographyFigure;
