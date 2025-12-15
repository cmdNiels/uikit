import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyTh = forwardRef<HTMLTableCellElement, ComponentProps<"th">>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cn(
			"px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
			className
		)}
		{...props}
	/>
));

TypographyTh.displayName = "TypographyTh";

export default TypographyTh;
