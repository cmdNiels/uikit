"use client";

import * as React from "react";

import cn from "@/cn";
import Dialog from "@/components/dialog/Dialog";
import DialogContent from "@/components/dialog/DialogContent";
import DialogDescription from "@/components/dialog/DialogDescription";
import DialogHeader from "@/components/dialog/DialogHeader";
import DialogTitle from "@/components/dialog/DialogTitle";

export default function CommandDialog({
	title = "Command Palette",
	description = "Search for a command to run...",
	children,
	className,
	showCloseButton = false,
	...props
}: Omit<React.ComponentProps<typeof Dialog>, "children"> & {
	title?: string;
	description?: string;
	className?: string;
	showCloseButton?: boolean;
	children: React.ReactNode;
}) {
	return (
		<Dialog {...props}>
			<DialogHeader className="sr-only">
				<DialogTitle>{title}</DialogTitle>
				<DialogDescription>{description}</DialogDescription>
			</DialogHeader>
			<DialogContent
				className={cn("top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0", className)}
				showCloseButton={showCloseButton}
				unstyled
			>
				{children}
			</DialogContent>
		</Dialog>
	);
}
