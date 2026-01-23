"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { IconX } from "@tabler/icons-react";

import cn from "@/cn";
import Button from "@/components/button/Button";

import DialogOverlay from "./DialogOverlay";
import DialogPortal from "./DialogPortal";

export default function DialogContent({
	className,
	children,
	showCloseButton = true,
	...props
}: DialogPrimitive.Popup.Props & {
	showCloseButton?: boolean;
}) {
	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Popup
				data-slot="dialog-content"
				className={cn(
					"fixed top-1/2 left-1/2 z-50 flex h-fit max-h-[calc(100%-2rem)] w-full max-w-[calc(100%-2rem)] -translate-1/2 overflow-hidden rounded-xl ring-1 ring-foreground/10 duration-100  outline-none  sm:max-w-md data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
					className
				)}
				{...props}
			>
				<div
					className={cn(
						"max-h-[calc(100%-2rem)]",
						"grid w-full gap-6 overflow-y-auto rounded-xl bg-background p-6 text-sm",
						"scrollbar-track-background scrollbar-thumb-border scrollbar"
					)}
				>
					{children}
					{showCloseButton && (
						<DialogPrimitive.Close
							data-slot="dialog-close"
							render={<Button variant="ghost" className="absolute top-4 right-4" size="icon-sm" />}
						>
							<IconX />
							<span className="sr-only">Close</span>
						</DialogPrimitive.Close>
					)}
				</div>
			</DialogPrimitive.Popup>
		</DialogPortal>
	);
}
