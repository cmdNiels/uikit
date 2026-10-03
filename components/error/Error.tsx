import { IconAlertCircle } from "@tabler/icons-react";
import { type HTMLAttributes } from "react";

import cn from "@/cn";
import Alert from "@/components/alert/Alert";
import AlertDescription from "@/components/alert/AlertDescription";
import AlertTitle from "@/components/alert/AlertTitle";

export default function Error({
	title,
	message,
	className,
	children,
	...props
}: HTMLAttributes<HTMLDivElement> & { title: string; message: string }) {
	return (
		<div
			className={cn("flex size-full shrink-0 grow flex-col items-center justify-center px-4", className)}
			{...props}
		>
			<div className="flex flex-col items-center justify-center gap-8 md:max-w-2xl">
				<Alert variant="destructive">
					<IconAlertCircle size={16} />
					<AlertTitle>{title}</AlertTitle>
					<AlertDescription>{message}</AlertDescription>
				</Alert>
				{children}
			</div>
		</div>
	);
}
