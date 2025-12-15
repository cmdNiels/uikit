"use client";

import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

export default function ContextMenu({ ...props }: ContextMenuPrimitive.Root.Props) {
	return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}
