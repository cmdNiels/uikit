"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function TableHeader({ className, ...props }: ComponentProps<"thead">) {
	return <thead data-slot="table-header" className={cn("[&_tr]:border-b", className)} {...props} />;
}
