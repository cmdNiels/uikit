import Image from "next/image";
import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyImg = forwardRef<HTMLImageElement, ComponentProps<typeof Image>>(
	({ className, alt = "", ...props }, ref) => (
		<Image ref={ref} className={cn("rounded-md", className)} alt={alt} {...props} />
	)
);

TypographyImg.displayName = "TypographyImg";

export default TypographyImg;
