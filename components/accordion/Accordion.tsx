"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import cn from "@/cn";

export default function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
	return (
		<AccordionPrimitive.Root data-slot="accordion" className={cn("flex w-full flex-col", className)} {...props} />
	);
}
