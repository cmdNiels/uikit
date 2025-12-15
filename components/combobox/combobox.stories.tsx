"use client";

import { useState } from "react";

import Combobox from "./Combobox";
import ComboboxContent from "./ComboboxContent";
import ComboboxInput from "./ComboboxInput";
import ComboboxItem from "./ComboboxItem";

export default {
	title: "UI/Combobox",
};

const frameworks = [
	{ value: "next.js", label: "Next.js" },
	{ value: "react", label: "React" },
	{ value: "vue", label: "Vue" },
	{ value: "svelte", label: "Svelte" },
	{ value: "angular", label: "Angular" },
];

function DefaultExample() {
	const [value, setValue] = useState<string | null>(null);

	return (
		<div className="w-64">
			<Combobox value={value} onValueChange={setValue}>
				<ComboboxInput placeholder="Select framework..." showTrigger showClear />
				<ComboboxContent>
					{frameworks.map((framework) => (
						<ComboboxItem key={framework.value} value={framework.value}>
							{framework.label}
						</ComboboxItem>
					))}
				</ComboboxContent>
			</Combobox>
		</div>
	);
}

export const Default = () => <DefaultExample />;

function WithDefaultValueExample() {
	const [value, setValue] = useState<string | null>("react");

	return (
		<div className="w-64">
			<Combobox value={value} onValueChange={setValue}>
				<ComboboxInput placeholder="Select framework..." showTrigger showClear />
				<ComboboxContent>
					{frameworks.map((framework) => (
						<ComboboxItem key={framework.value} value={framework.value}>
							{framework.label}
						</ComboboxItem>
					))}
				</ComboboxContent>
			</Combobox>
		</div>
	);
}

export const WithDefaultValue = () => <WithDefaultValueExample />;
