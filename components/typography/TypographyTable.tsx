import { forwardRef, type ComponentProps } from "react";

import cn from "@/cn";

const TypographyTable = forwardRef<HTMLTableElement, ComponentProps<"table">>(({ className, ...props }, ref) => (
	<div className="my-6 scrollbar-none w-full overflow-y-auto rounded-lg border">
		<table
			ref={ref}
			className={cn(
				"relative w-full overflow-hidden border-none text-sm [&_tbody_tr:last-child]:border-b-0",
				className
			)}
			{...props}
		/>
	</div>
));

TypographyTable.displayName = "TypographyTable";

export default TypographyTable;
