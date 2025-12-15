"use client";

import cn from "@/cn";

import type { ComponentProps } from "react";

export default function TableBody({ className, ...props }: ComponentProps<"tbody">) {
	return <tbody data-slot="table-body" className={cn("[&_tr:last-child]:border-0", className)} {...props} />;
}
