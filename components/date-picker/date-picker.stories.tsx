"use client";

import { useState } from "react";

import DatePicker from "./DatePicker";

export default {
	title: "UI/DatePicker",
};

function DefaultExample() {
	const [date, setDate] = useState<Date | undefined>();

	return <DatePicker value={date} onChange={setDate} />;
}

export const Default = () => <DefaultExample />;

function WithDefaultValueExample() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return <DatePicker value={date} onChange={setDate} />;
}

export const WithDefaultValue = () => <WithDefaultValueExample />;
