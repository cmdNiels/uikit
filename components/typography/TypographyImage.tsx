import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyImage = forwardRef<HTMLImageElement, ComponentProps<"img">>(({ className, alt, ...props }, ref) => (
	<img ref={ref} className={cn("mt-6 rounded-md border", className)} alt={alt ?? ""} {...props} />
));

TypographyImage.displayName = "TypographyImage";

export default TypographyImage;
