"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { type ChangeEvent, useState } from "react";

import cn from "@/cn";
import Button from "@/components/button/Button";
import Calendar from "@/components/calendar/Calendar";
import Input from "@/components/input/Input";
import Label from "@/components/label/Label";
import Popover from "@/components/popover/Popover";
import PopoverContent from "@/components/popover/PopoverContent";
import PopoverTrigger from "@/components/popover/PopoverTrigger";

export default function DatePicker({
	value,
	onChange,
	className,
}: {
	value: Date | undefined;
	onChange?(date: Date | undefined): void;
	className?: string;
}) {
	const [open, setOpen] = useState(false);
	const [time, setTime] = useState(() => {
		if (!value) {
			return "10:30:00";
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
		<div className={cn("flex gap-4", className)}>
			<div className="flex flex-col gap-3">
				<Label htmlFor="date-picker" className="px-1">
					Date
				</Label>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger>
						<Button variant="outline" id="date-picker" className="w-32 justify-between font-normal">
							{value ? value.toLocaleDateString() : "Select date"}
							<IconChevronDown />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto overflow-hidden p-0" align="start">
						<Calendar mode="single" selected={value} captionLayout="dropdown" onSelect={handleDateSelect} />
					</PopoverContent>
				</Popover>
			</div>
			<div className="flex flex-col gap-3">
				<Label htmlFor="time-picker" className="px-1">
					Time
				</Label>
				<Input
					type="time"
					id="time-picker"
					step="1"
					value={time}
					onChange={handleTimeChange}
					className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</div>
		</div>
	);
}
