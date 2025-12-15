"use client";

import { useState } from "react";

import Calendar from "./Calendar";

import type { DateRange } from "react-day-picker";

export default {
	title: "UI/Calendar",
};

function DefaultExample() {
	const [selected, setSelected] = useState<Date>();
	return <Calendar mode="single" selected={selected} onSelect={setSelected} />;
}

export const Default = () => <DefaultExample />;

function WithDropdownExample() {
	const [selected, setSelected] = useState<Date>();
	return <Calendar mode="single" captionLayout="dropdown" selected={selected} onSelect={setSelected} />;
}

export const WithDropdown = () => <WithDropdownExample />;

function MultipleSelectionExample() {
	const [selected, setSelected] = useState<Date[] | undefined>();
	return <Calendar mode="multiple" selected={selected} onSelect={setSelected} />;
}

export const MultipleSelection = () => <MultipleSelectionExample />;

function RangeSelectionExample() {
	const [selected, setSelected] = useState<DateRange | undefined>();
	return <Calendar mode="range" selected={selected} onSelect={setSelected} />;
}

export const RangeSelection = () => <RangeSelectionExample />;

function WithWeekNumbersExample() {
	const [selected, setSelected] = useState<Date>();
	return <Calendar mode="single" showWeekNumber selected={selected} onSelect={setSelected} />;
}

export const WithWeekNumbers = () => <WithWeekNumbersExample />;
