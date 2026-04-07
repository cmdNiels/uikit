"use client";

import { IconSearch } from "@tabler/icons-react";
import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import cn from "@/cn";
import InputGroup from "@/components/input-group/InputGroup";
import InputGroupAddon from "@/components/input-group/InputGroupAddon";

export default function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>) {
	return (
		<div data-slot="command-input-wrapper" className="p-1 pb-0">
			<InputGroup className="h-8! rounded-lg! border-border bg-card shadow-none! *:data-[slot=input-group-addon]:pl-2!">
				<CommandPrimitive.Input
					data-slot="command-input"
					className={cn(
						"w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
						className
					)}
					{...props}
				/>
				<InputGroupAddon>
					<IconSearch className="size-4 shrink-0 opacity-50" />
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
