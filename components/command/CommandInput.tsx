import { IconSearch } from "@tabler/icons-react";
import { type ComponentProps } from "react";

import cn from "@/cn";
import type Input from "@/components/input/Input";
import InputGroup from "@/components/input-group/InputGroup";
import InputGroupAddon from "@/components/input-group/InputGroupAddon";
import InputGroupInput from "@/components/input-group/InputGroupInput";

export default function CommandInput({ className, ...props }: ComponentProps<typeof Input>) {
	return (
		<div className="absolute inset-x-0 top-0 z-10 p-2">
			<InputGroup className="h-8! bg-card shadow-sm">
				<InputGroupInput
					data-slot="command-input"
					className={cn("w-full text-sm outline-hidden disabled:opacity-50", className)}
					autoComplete="off"
					{...props}
				/>
				<InputGroupAddon>
					<IconSearch className="size-4 shrink-0 opacity-50" />
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
