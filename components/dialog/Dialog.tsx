"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

export default function Dialog({ ...props }: DialogPrimitive.Root.Props) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}
