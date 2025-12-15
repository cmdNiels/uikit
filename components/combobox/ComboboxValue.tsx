"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";

export default function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
	return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}
