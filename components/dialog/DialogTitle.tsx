"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import cn from "@/cn";

export default function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cn("leading-none font-medium", className)}
			{...props}
		/>
	);
}
