import { toast } from "sonner";

import Button from "@/components/button/Button";

import Toaster from "./Toaster";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Toaster",
};

export const Default: Story<
	Partial<ComponentProps<typeof Toaster>> & {
		type: "default" | "success" | "error" | "warning" | "info";
		message: string;
	}
> = ({ type, message }) => {
	const handleClick = () => {
		switch (type) {
			case "success":
				toast.success(message);
				break;
			case "error":
				toast.error(message);
				break;
			case "warning":
				toast.warning(message);
				break;
			case "info":
				toast.info(message);
				break;
			default:
				toast(message);
		}
	};

	return (
		<>
			<Toaster />
			<Button onClick={handleClick}>Show Toast</Button>
		</>
	);
};

Default.args = {
	type: "default",
	message: "This is a toast notification",
};

Default.argTypes = {
	type: {
		control: { type: "select" },
		options: ["default", "success", "error", "warning", "info"],
		defaultValue: "default",
	},
	message: {
		control: { type: "text" },
		defaultValue: "This is a toast notification",
	},
};

export const WithAction = () => (
	<>
		<Toaster />
		<Button
			onClick={() =>
				toast("Event Scheduled", {
					action: {
						label: "Undo",
						onClick: () => {
							toast("Action undone");
						},
					},
				})
			}
		>
			Show Toast with Action
		</Button>
	</>
);
