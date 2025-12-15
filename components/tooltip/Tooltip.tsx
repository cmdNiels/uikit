"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import TooltipProvider from "./TooltipProvider";

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
	return (
		<TooltipProvider>
			<TooltipPrimitive.Root data-slot="tooltip" {...props} />
		</TooltipProvider>
	);
}

export default Tooltip;
