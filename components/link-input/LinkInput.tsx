"use client";

import { IconExternalLink } from "@tabler/icons-react";
import {
	useState,
	useRef,
	type ComponentProps,
	isValidElement,
	Children,
	type ReactNode,
	type ChangeEvent,
	type ReactElement,
} from "react";

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

	const innerText =
		Children.map(children, (child: ReactNode) => {
			if (isValidElement<{ children?: ReactNode }>(child) && child.props.children) {
				const inputGroupText = child.props.children as ReactElement;
				if (isValidElement<{ children?: ReactNode }>(inputGroupText) && inputGroupText.props.children) {
					const inputGroupTextInnerText = inputGroupText.props.children;
					if (typeof inputGroupTextInnerText === "string" || typeof inputGroupTextInnerText === "number") {
						return inputGroupTextInnerText as string;
					}
				}
			}
		})?.[0] ?? "";

	const [hasValidValue, setHasValidValue] = useState<boolean>(
		/^https:\/\/[^\/]*\.[^\/]+/.test(String(innerText + (value ?? defaultValue)))
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e);

		if (!e.target.value) {
			setHasValidValue(false);
		}

		clearTimeout(debounceRef.current);
		debounceRef.current = setTimeout(() => {
			setHasValidValue(/^https:\/\/[^\/]*\.[^\/]+/.test(innerText + e.target.value));
		}, 300);
	};

	const handleOpen = () => {
		const inputValue = inputRef.current?.value ?? "";

		window.open(innerText + inputValue, "_blank", "noopener,noreferrer");
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
				<Button variant="link" className="h-8 px-2" disabled={disabled ?? !hasValidValue} onClick={handleOpen}>
					<IconExternalLink className="size-4" />
				</Button>
			</InputGroupAddon>
			{children}
		</InputGroup>
	);
}
