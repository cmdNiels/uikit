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
import CommandGroup from "./CommandGroup";
import CommandInput from "./CommandInput";
import CommandItem from "./CommandItem";
import CommandList from "./CommandList";
import CommandSeparator from "./CommandSeparator";
import CommandShortcut from "./CommandShortcut";

import type { Story } from "@ladle/react";

export default {
	title: "UI/Command",
};

export const Default: Story = () => (
	<Command className="max-w-md rounded-lg border">
		<CommandInput placeholder="Type a command or search..." />
		<CommandList>
			<CommandEmpty>No results found.</CommandEmpty>
			<CommandGroup heading="Suggestions">
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
			</CommandGroup>
			<CommandSeparator />
			<CommandGroup heading="Settings">
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
			</CommandGroup>
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
						<CommandGroup heading="Suggestions">
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search Emoji</CommandItem>
							<CommandItem>Calculator</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem>Profile</CommandItem>
							<CommandItem>Billing</CommandItem>
							<CommandItem>Settings</CommandItem>
						</CommandGroup>
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
			<CommandGroup heading="Settings">
				<CommandItem>
					<IconUser />
					<span>Profile</span>
					<CommandShortcut>⌘P</CommandShortcut>
				</CommandItem>
				<CommandItem>
					<IconCreditCard />
					<span>Billing</span>
					<CommandShortcut>⌘B</CommandShortcut>
				</CommandItem>
				<CommandItem>
					<IconSettings />
					<span>Settings</span>
					<CommandShortcut>⌘S</CommandShortcut>
				</CommandItem>
			</CommandGroup>
		</CommandList>
	</Command>
);

export const Groups: Story = () => (
	<Command className="max-w-md rounded-lg border">
		<CommandInput placeholder="Type a command or search..." />
		<CommandList>
			<CommandEmpty>No results found.</CommandEmpty>
			<CommandGroup heading="Suggestions">
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
			</CommandGroup>
			<CommandSeparator />
			<CommandGroup heading="Settings">
				<CommandItem>
					<IconUser />
					<span>Profile</span>
					<CommandShortcut>⌘P</CommandShortcut>
				</CommandItem>
				<CommandItem>
					<IconCreditCard />
					<span>Billing</span>
					<CommandShortcut>⌘B</CommandShortcut>
				</CommandItem>
				<CommandItem>
					<IconSettings />
					<span>Settings</span>
					<CommandShortcut>⌘S</CommandShortcut>
				</CommandItem>
			</CommandGroup>
		</CommandList>
	</Command>
);

export const Scrollable: Story = () => (
	<Command className="max-w-md rounded-lg border">
		<CommandInput placeholder="Type a command or search..." />
		<CommandList>
			<CommandEmpty>No results found.</CommandEmpty>
			<CommandGroup heading="Suggestions">
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
			</CommandGroup>
			<CommandSeparator />
			<CommandGroup heading="Settings">
				<CommandItem>
					<IconUser />
					<span>Profile</span>
					<CommandShortcut>⌘P</CommandShortcut>
				</CommandItem>
				<CommandItem>
					<IconCreditCard />
					<span>Billing</span>
					<CommandShortcut>⌘B</CommandShortcut>
				</CommandItem>
				<CommandItem>
					<IconSettings />
					<span>Settings</span>
					<CommandShortcut>⌘S</CommandShortcut>
				</CommandItem>
			</CommandGroup>
			<CommandGroup heading="Actions">
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
			</CommandGroup>
		</CommandList>
	</Command>
);
