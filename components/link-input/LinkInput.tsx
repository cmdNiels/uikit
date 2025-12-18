"use client";

import { IconExternalLink } from "@tabler/icons-react";
import { useState, useRef, type ComponentProps, isValidElement, Children } from "react";

import Button from "@/components/button/Button";
import InputGroup from "@/components/input-group/InputGroup";
import InputGroupAddon from "@/components/input-group/InputGroupAddon";
import InputGroupInput from "@/components/input-group/InputGroupInput";

export default function LinkInput({
	disabled,
	defaultValue,
	value,
	onChange,
	children,
	...props
}: ComponentProps<typeof InputGroupInput>) {
	const inputRef = useRef<HTMLInputElement>(null);
	const debounceRef = useRef<NodeJS.Timeout | undefined>(undefined);
	const [hasValidValue, setHasValidValue] = useState<boolean>(/^https?:\/\/.+/.test(String(value ?? defaultValue)));

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e);

		if (!e.target.value) {
			setHasValidValue(false);
		}

		clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			setHasValidValue(/^https?:\/\/.+/.test(e.target.value));
		}, 300);
	};

	const handleCopy = () => {
		const inputValue = inputRef.current?.value ?? "";

		const text = Children.map(children, (child: React.ReactNode) => {
			if (isValidElement<{ children?: React.ReactNode }>(child) && child.props.children) {
				const inputGroupText = child.props.children as React.ReactElement;
				if (isValidElement<{ children?: React.ReactNode }>(inputGroupText) && inputGroupText.props.children) {
					const innerText = inputGroupText.props.children;
					if (typeof innerText === "string" || typeof innerText === "number") {
						return innerText;
					}
				}
			}
		})?.[0] ?? "";

		window.open(text + inputValue, "_blank", "noopener,noreferrer");
	}

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
				<Button
					variant="link"
					className="h-8 px-2"
					disabled={disabled ?? !hasValidValue}
					onClick={handleCopy}
				>
					<IconExternalLink className="size-4" />
				</Button>
			</InputGroupAddon>
			{children}
		</InputGroup>
	);
}
