"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

export default function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}
