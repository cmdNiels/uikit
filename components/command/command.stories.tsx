import {
	IconCalculator,
	IconCalendar,
	IconCreditCard,
	IconFile,
	IconFileText,
	IconMoodSmile,
	IconSearch,
	IconSettings,
	IconUser,
} from "@tabler/icons-react";
import { useState } from "react";

import Button from "@/components/button/Button";

import Command from "./Command";
import CommandDialog from "./CommandDialog";
import CommandEmpty from "./CommandEmpty";
import CommandInput from "./CommandInput";
import CommandItem from "./CommandItem";
import CommandList from "./CommandList";

import type { Story } from "@ladle/react";

export default {
	title: "UI/Command",
};

export const Default: Story = () => (
	<Command className="max-w-md rounded-lg border">
		<CommandInput placeholder="Type a command or search..." />
		<CommandList>
			<CommandEmpty>No results found.</CommandEmpty>
			<CommandItem>
				<IconCalendar />
				<span>Calendar</span>
			</CommandItem>
			<CommandItem>
				<IconMoodSmile />
				<span>Search Emoji</span>
			</CommandItem>
			<CommandItem>
				<IconCalculator />
				<span>Calculator</span>
			</CommandItem>
			<CommandItem>
				<IconUser />
				<span>Profile</span>
			</CommandItem>
			<CommandItem>
				<IconCreditCard />
				<span>Billing</span>
			</CommandItem>
			<CommandItem>
				<IconSettings />
				<span>Settings</span>
			</CommandItem>
		</CommandList>
	</Command>
);

export const Basic: Story = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button onClick={() => setOpen(true)}>Open Command Menu</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<Command>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandItem>Calendar</CommandItem>
						<CommandItem>Search Emoji</CommandItem>
						<CommandItem>Calculator</CommandItem>
						<CommandItem>Profile</CommandItem>
						<CommandItem>Billing</CommandItem>
						<CommandItem>Settings</CommandItem>
					</CommandList>
				</Command>
			</CommandDialog>
		</>
	);
};

export const Shortcuts: Story = () => (
	<Command className="max-w-md rounded-lg border">
		<CommandInput placeholder="Type a command or search..." />
		<CommandList>
			<CommandEmpty>No results found.</CommandEmpty>
			<CommandItem>
				<IconUser />
				<span>Profile</span>
			</CommandItem>
			<CommandItem>
				<IconCreditCard />
				<span>Billing</span>
			</CommandItem>
			<CommandItem>
				<IconSettings />
				<span>Settings</span>
			</CommandItem>
		</CommandList>
	</Command>
);

export const Groups: Story = () => (
	<Command className="max-w-md rounded-lg border">
		<CommandInput placeholder="Type a command or search..." />
		<CommandList>
			<CommandEmpty>No results found.</CommandEmpty>
			<CommandItem>
				<IconCalendar />
				<span>Calendar</span>
			</CommandItem>
			<CommandItem>
				<IconMoodSmile />
				<span>Search Emoji</span>
			</CommandItem>
			<CommandItem>
				<IconCalculator />
				<span>Calculator</span>
			</CommandItem>
			<CommandItem>
				<IconUser />
				<span>Profile</span>
			</CommandItem>
			<CommandItem>
				<IconCreditCard />
				<span>Billing</span>
			</CommandItem>
			<CommandItem>
				<IconSettings />
				<span>Settings</span>
			</CommandItem>
		</CommandList>
	</Command>
);

export const Scrollable: Story = () => (
	<Command className="max-w-md rounded-lg border">
		<CommandInput placeholder="Type a command or search..." />
		<CommandList>
			<CommandEmpty>No results found.</CommandEmpty>
			<CommandItem>
				<IconCalendar />
				<span>Calendar</span>
			</CommandItem>
			<CommandItem>
				<IconMoodSmile />
				<span>Search Emoji</span>
			</CommandItem>
			<CommandItem>
				<IconCalculator />
				<span>Calculator</span>
			</CommandItem>
			<CommandItem>
				<IconSearch />
				<span>Search</span>
			</CommandItem>
			<CommandItem>
				<IconFile />
				<span>Files</span>
			</CommandItem>
			<CommandItem>
				<IconFileText />
				<span>Documents</span>
			</CommandItem>
			<CommandItem>
				<IconUser />
				<span>Profile</span>
			</CommandItem>
			<CommandItem>
				<IconCreditCard />
				<span>Billing</span>
			</CommandItem>
			<CommandItem>
				<IconSettings />
				<span>Settings</span>
			</CommandItem>
			<CommandItem>
				<IconCalendar />
				<span>New Event</span>
			</CommandItem>
			<CommandItem>
				<IconFile />
				<span>New File</span>
			</CommandItem>
			<CommandItem>
				<IconFileText />
				<span>New Document</span>
			</CommandItem>
			<CommandItem>
				<IconUser />
				<span>New Contact</span>
			</CommandItem>
			<CommandItem>
				<IconCalculator />
				<span>Open Calculator</span>
			</CommandItem>
		</CommandList>
	</Command>
);
