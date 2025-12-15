import { type ComponentProps, forwardRef } from "react";

import cn from "@/cn";

const TypographyFigureCaption = forwardRef<HTMLElement, ComponentProps<"figcaption">>(
	({ className, children, ...props }, ref) => (
		<figcaption
			ref={ref}
			className={cn(
				"flex items-center gap-2 text-neutral-700 dark:text-neutral-300 [&_svg]:size-4 [&_svg]:text-neutral-700 [&_svg]:opacity-70 dark:[&_svg]:text-neutral-300",
				className
			)}
			{...props}
		>
			{children}
		</figcaption>
	)
);

TypographyFigureCaption.displayName = "TypographyFigureCaption";

export default TypographyFigureCaption;
