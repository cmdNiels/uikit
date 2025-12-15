"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";

export default function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
	return <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />;
}
