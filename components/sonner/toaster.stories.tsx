"use client";

import { toast } from "sonner";

import Button from "@/components/button/Button";

import Toaster from "./Toaster";

export default {
	title: "UI/Toaster",
};

export const Default = () => (
	<>
		<Toaster />
		<Button onClick={() => toast("This is a toast notification")}>Show Toast</Button>
	</>
);

export const Success = () => (
	<>
		<Toaster />
		<Button onClick={() => toast.success("Operation completed successfully")}>Show Success</Button>
	</>
);

export const Error = () => (
	<>
		<Toaster />
		<Button onClick={() => toast.error("An error occurred")}>Show Error</Button>
	</>
);

export const Warning = () => (
	<>
		<Toaster />
		<Button onClick={() => toast.warning("This is a warning")}>Show Warning</Button>
	</>
);

export const Info = () => (
	<>
		<Toaster />
		<Button onClick={() => toast.info("Here is some information")}>Show Info</Button>
	</>
);

export const WithDescription = () => (
	<>
		<Toaster />
		<Button
			onClick={() =>
				toast("Event Scheduled", {
					description: "Your event has been scheduled for tomorrow at 10:00 AM",
				})
			}
		>
			Show Toast with Description
		</Button>
	</>
);

export const WithAction = () => (
	<>
		<Toaster />
		<Button
			onClick={() =>
				toast("Event Scheduled", {
					action: {
						label: "Undo",
						onClick: () => {
							// Undo action triggered
						},
					},
				})
			}
		>
			Show Toast with Action
		</Button>
	</>
);
