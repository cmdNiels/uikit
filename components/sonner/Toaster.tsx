/* eslint-disable better-tailwindcss/no-unregistered-classes */

"use client";

import { IconCircleCheck, IconInfoCircle, IconAlertTriangle, IconAlertOctagon, IconLoader } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import type { CSSProperties } from "react";

export default function Toaster({ ...props }: ToasterProps) {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			className="toaster group"
			icons={{
				success: <IconCircleCheck className="size-4" />,
				info: <IconInfoCircle className="size-4" />,
				warning: <IconAlertTriangle className="size-4" />,
				error: <IconAlertOctagon className="size-4" />,
				loading: <IconLoader className="size-4 animate-spin" />,
			}}
			style={
				{
					"--normal-bg": "var(--card)",
					"--normal-text": "var(--card-foreground)",
					"--normal-border": "var(--border)",
					"--border-radius": "var(--radius)",
				} as CSSProperties
			}
			toastOptions={{
				classNames: {
					toast: "cn-toast backdrop-blur-xs",
					success:
						"bg-green-50/80! text-green-700! border-green-300! dark:bg-green-950/80! dark:text-green-300! dark:border-green-700!",
					error: "bg-red-50/80! text-red-700! border-red-300! dark:bg-red-950/80! dark:text-red-300! dark:border-red-700!",
					warning:
						"bg-yellow-50/80! text-yellow-700! border-yellow-300! dark:bg-yellow-950/80! dark:text-yellow-300! dark:border-yellow-700!",
					info: "bg-blue-50/80! text-blue-700! border-blue-300! dark:bg-blue-950/80! dark:text-blue-300! dark:border-blue-700!",
				},
			}}
			{...props}
		/>
	);
}
