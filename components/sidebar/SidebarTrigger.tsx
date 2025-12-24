"use client";

import { IconLayoutSidebar } from "@tabler/icons-react";
import { type ComponentProps } from "react";

import cn from "@/cn";
import Button from "@/components/button/Button";

import useSidebar from "./useSidebar";

export default function SidebarTrigger({ className, onClick, ...props }: ComponentProps<typeof Button>) {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			data-sidebar="trigger"
			data-slot="sidebar-trigger"
			variant="ghost"
			size="icon-sm"
			className={cn(className)}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			<IconLayoutSidebar />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
}
