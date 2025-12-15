import Image from "next/image";
import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyImage = forwardRef<HTMLImageElement, ComponentProps<"img">>(
	({ src, className, width, height, alt, ...props }, ref) => (
		<Image
			ref={ref}
			className={cn("mt-6 rounded-md border", className)}
			src={(src as string) || ""}
			width={Number(width)}
			height={Number(height)}
			alt={alt ?? ""}
			{...props}
		/>
	)
);

TypographyImage.displayName = "TypographyImage";

export default TypographyImage;
