"use client";

import ContextMenuContent from "./ContextMenuContent";

import type { ComponentProps } from "react";

export default function ContextMenuSubContent({ ...props }: ComponentProps<typeof ContextMenuContent>) {
	return <ContextMenuContent data-slot="context-menu-sub-content" className="shadow-lg" side="right" {...props} />;
}
