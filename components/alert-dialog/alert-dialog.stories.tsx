import Button from "@/components/button/Button";

import AlertDialog from "./AlertDialog";
import AlertDialogAction from "./AlertDialogAction";
import AlertDialogCancel from "./AlertDialogCancel";
import AlertDialogContent from "./AlertDialogContent";
import AlertDialogDescription from "./AlertDialogDescription";
import AlertDialogFooter from "./AlertDialogFooter";
import AlertDialogHeader from "./AlertDialogHeader";
import AlertDialogTitle from "./AlertDialogTitle";
import AlertDialogTrigger from "./AlertDialogTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/AlertDialog",
};

export const Default: Story<
	Partial<ComponentProps<typeof AlertDialogContent>> & {
		title: string;
		description: string;
		triggerText: string;
		cancelText: string;
		actionText: string;
	}
> = ({ size, title, description, triggerText, cancelText, actionText }) => (
	<AlertDialog>
		<AlertDialogTrigger>
			<Button variant="outline">{triggerText}</Button>
		</AlertDialogTrigger>
		<AlertDialogContent size={size}>
			<AlertDialogHeader>
				<AlertDialogTitle>{title}</AlertDialogTitle>
				<AlertDialogDescription>{description}</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>
					<Button variant="outline">{cancelText}</Button>
				</AlertDialogCancel>
				<AlertDialogAction>
					<Button variant="destructive">{actionText}</Button>
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
);

Default.args = {
	size: "default",
	title: "Are you absolutely sure?",
	description:
		"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
	triggerText: "Open Alert",
	cancelText: "Cancel",
	actionText: "Continue",
};

Default.argTypes = {
	size: {
		control: { type: "select" },
		options: ["default", "sm"],
		defaultValue: "default",
	},
	title: {
		control: { type: "text" },
		defaultValue: "Are you absolutely sure?",
	},
	description: {
		control: { type: "text" },
		defaultValue:
			"This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
	},
	triggerText: {
		control: { type: "text" },
		defaultValue: "Open Alert",
	},
	cancelText: {
		control: { type: "text" },
		defaultValue: "Cancel",
	},
	actionText: {
		control: { type: "text" },
		defaultValue: "Continue",
	},
};
