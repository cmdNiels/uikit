import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyTd = forwardRef<HTMLTableCellElement, ComponentProps<"td">>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cn(
			"px-4 py-2 text-left whitespace-nowrap [[align=center]]:text-center [[align=right]]:text-right",
			className
		)}
		{...props}
	/>
));

TypographyTd.displayName = "TypographyTd";

export default TypographyTd;
