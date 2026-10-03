import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyImg = forwardRef<HTMLImageElement, ComponentProps<"img">>(({ className, alt = "", ...props }, ref) => (
	<img ref={ref} className={cn("rounded-md", className)} alt={alt} {...props} />
));

TypographyImg.displayName = "TypographyImg";

export default TypographyImg;
