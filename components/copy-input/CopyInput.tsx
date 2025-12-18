"use client";

import { IconCopy } from "@tabler/icons-react";
import { useState, useRef, type ComponentProps, Children, isValidElement } from "react";

import Button from "@/components/button/Button";
import InputGroup from "@/components/input-group/InputGroup";
import InputGroupAddon from "@/components/input-group/InputGroupAddon";
import InputGroupInput from "@/components/input-group/InputGroupInput";

export default function CopyInput({
	disabled,
	defaultValue,
	value,
	onChange,
	children,
	...props
}: ComponentProps<typeof InputGroupInput>) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [hasValue, setHasValue] = useState<boolean>(Boolean(value ?? defaultValue));

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e);
		setHasValue(Boolean(e.target.value));
	};

	const handleCopy = () => {
		const inputValue = inputRef.current?.value ?? "";

		const text =
			Children.map(children, (child: React.ReactNode) => {
				if (isValidElement<{ children?: React.ReactNode }>(child) && child.props.children) {
					const inputGroupText = child.props.children as React.ReactElement;
					if (
						isValidElement<{ children?: React.ReactNode }>(inputGroupText) &&
						inputGroupText.props.children
					) {
						const innerText = inputGroupText.props.children;
						if (typeof innerText === "string" || typeof innerText === "number") {
							return innerText;
						}
					}
				}
			})?.[0] ?? "";

		navigator.clipboard.writeText(text + inputValue);
	};

	return (
		<InputGroup>
			<InputGroupInput
				ref={inputRef}
				disabled={disabled}
				defaultValue={defaultValue}
				value={value}
				onChange={handleChange}
				{...props}
			/>
			<InputGroupAddon align="inline-end">
				<Button variant="link" className="h-8 px-2" disabled={disabled ?? !hasValue} onClick={handleCopy}>
					<IconCopy className="size-4" />
				</Button>
			</InputGroupAddon>
			{children}
		</InputGroup>
	);
}
