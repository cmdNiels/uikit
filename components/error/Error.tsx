"use client";

import { IconAlertCircle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import cn from "@/cn";
import Alert from "@/components/alert/Alert";
import AlertDescription from "@/components/alert/AlertDescription";
import AlertTitle from "@/components/alert/AlertTitle";
import Button from "@/components/button/Button";

export default function Error({
	title,
	message,
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement> & { title: string; message: string }) {
	const router = useRouter();

	const handleClick = () => {
		router.replace("/");
	};

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
				<Button variant="default" onClick={handleClick}>
					Go to Home
				</Button>
			</div>
		</div>
	);
}
