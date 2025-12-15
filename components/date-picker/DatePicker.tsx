"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { type ChangeEvent, type ComponentPropsWithoutRef, forwardRef, useState } from "react";

import cn from "@/cn";
import Calendar from "@/components/calendar/Calendar";
import InputGroup from "@/components/input-group/InputGroup";
import InputGroupButton from "@/components/input-group/InputGroupButton";
import InputGroupInput from "@/components/input-group/InputGroupInput";
import Popover from "@/components/popover/Popover";
import PopoverContent from "@/components/popover/PopoverContent";
import PopoverTrigger from "@/components/popover/PopoverTrigger";

const DatePicker = forwardRef<
	HTMLDivElement,
	{
		value: Date | undefined;
		onChange?(date: Date | undefined): void;
	} & Omit<ComponentPropsWithoutRef<typeof InputGroup>, "onChange">
>(({ value, onChange, className, ...props }, ref) => {
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(() => {
		if (!value) {
			return "00:00:00";
		}
		const hours = String(value.getHours()).padStart(2, "0");
		const minutes = String(value.getMinutes()).padStart(2, "0");
		const seconds = String(value.getSeconds()).padStart(2, "0");
		return `${hours}:${minutes}:${seconds}`;
	});

	const handleDateSelect = (selectedDate: Date | undefined) => {
		if (selectedDate) {
			const [hours, minutes, seconds] = time.split(":").map(Number);
			selectedDate.setHours(hours, minutes, seconds);
		}
		onChange?.(selectedDate);
		setOpen(false);
	};

	const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newTime = e.target.value;
		setTime(newTime);

		if (value) {
			const [hours, minutes, seconds] = newTime.split(":").map(Number);
			const newDate = new Date(value);
			newDate.setHours(hours, minutes, seconds);
			onChange?.(newDate);
		}
	};

	return (
		<InputGroup ref={ref} className={cn("w-fit", className)} {...props}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger>
					<InputGroupButton size="sm" variant="none" className="font-normal">
						{value ? value.toLocaleDateString() : "Select date"}
						<IconChevronDown />
					</InputGroupButton>
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden p-0" align="start">
					<Calendar mode="single" selected={value} captionLayout="dropdown" onSelect={handleDateSelect} />
				</PopoverContent>
			</Popover>
			<InputGroupInput
				type="time"
				id="time-picker"
				step="1"
				value={time}
				onChange={handleTimeChange}
				className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
			/>
		</InputGroup>
	);
});

DatePicker.displayName = "DatePicker";

export default DatePicker;
