"use client";

import { IconExternalLink } from "@tabler/icons-react";
import { useState, useRef, type ComponentProps } from "react";

import Button from "@/components/button/Button";
import InputGroup from "@/components/input-group/InputGroup";
import InputGroupAddon from "@/components/input-group/InputGroupAddon";
import InputGroupInput from "@/components/input-group/InputGroupInput";

export default function LinkInput({
	disabled,
	defaultValue,
	value,
	onChange,
	...props
}: ComponentProps<typeof InputGroupInput>) {
	const inputRef = useRef<HTMLInputElement>(null);
	const debounceRef = useRef<NodeJS.Timeout | undefined>(undefined);
	const [hasValidValue, setHasValidValue] = useState<boolean>(false);

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

	return (
		<InputGroup>
			<InputGroupInput ref={inputRef} value={value} onChange={handleChange} {...props} />
			<InputGroupAddon align="inline-end">
				<Button
					variant="link"
					className="h-8 px-2"
					disabled={disabled ?? !hasValidValue}
					onClick={() => {
						if (inputRef.current?.value) {
							window.open(inputRef.current?.value, "_blank", "noopener,noreferrer");
						}
					}}
				>
					<IconExternalLink className="size-4" />
				</Button>
			</InputGroupAddon>
		</InputGroup>
	);
}
