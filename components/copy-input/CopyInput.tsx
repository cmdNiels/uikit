"use client";

import { IconCopy } from "@tabler/icons-react";
import { useState, useRef, type ComponentProps } from "react";

import Button from "@/components/button/Button";
import InputGroup from "@/components/input-group/InputGroup";
import InputGroupAddon from "@/components/input-group/InputGroupAddon";
import InputGroupInput from "@/components/input-group/InputGroupInput";

export default function CopyInput({
	disabled,
	defaultValue,
	value,
	onChange,
	...props
}: ComponentProps<typeof InputGroupInput>) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [hasValue, setHasValue] = useState<boolean>(Boolean(value ?? defaultValue));

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e);
		setHasValue(Boolean(e.target.value));
	};

	return (
		<InputGroup>
			<InputGroupInput ref={inputRef} disabled={disabled} defaultValue={defaultValue} value={value} onChange={handleChange} {...props} />
			<InputGroupAddon align="inline-end">
				<Button
					variant="link"
					className="h-8 px-2"
					disabled={disabled ?? !hasValue}
					onClick={() => {
						navigator.clipboard.writeText(inputRef.current?.value ?? "");
					}}
				>
					<IconCopy className="size-4" />
				</Button>
			</InputGroupAddon>
		</InputGroup>
	);
}
