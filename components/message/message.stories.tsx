import Message from "./Message";
import MessageAvatar from "./MessageAvatar";
import MessageContent from "./MessageContent";
import MessageFooter from "./MessageFooter";
import MessageGroup from "./MessageGroup";
import MessageHeader from "./MessageHeader";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Message",
};

export const Default: Story<
	Partial<ComponentProps<typeof Message>> & {
		header: string;
		content: string;
		footer: string;
	}
> = ({ align, header, content, footer }) => (
	<MessageGroup className="w-96">
		<Message align={align}>
			<MessageAvatar>
				<div className="size-8 rounded-full bg-muted-foreground/20" />
			</MessageAvatar>
			<MessageContent>
				<MessageHeader>{header}</MessageHeader>
				<p className="rounded-lg bg-muted px-3 py-2">{content}</p>
				<MessageFooter>{footer}</MessageFooter>
			</MessageContent>
		</Message>
	</MessageGroup>
);

Default.args = {
	align: "start",
	header: "Alice",
	content: "Hey! Have you seen the new update?",
	footer: "2 min ago",
};

Default.argTypes = {
	align: {
		control: { type: "select" },
		options: ["start", "end"],
		defaultValue: "start",
	},
	header: {
		control: { type: "text" },
		defaultValue: "Alice",
	},
	content: {
		control: { type: "text" },
		defaultValue: "Hey! Have you seen the new update?",
	},
	footer: {
		control: { type: "text" },
		defaultValue: "2 min ago",
	},
};

export const EndAligned: Story = () => (
	<MessageGroup className="w-96">
		<Message align="end">
			<MessageAvatar>
				<div className="size-8 rounded-full bg-primary/20" />
			</MessageAvatar>
			<MessageContent>
				<MessageHeader>You</MessageHeader>
				<p className="rounded-lg bg-primary px-3 py-2 text-primary-foreground">Yeah, it looks amazing!</p>
				<MessageFooter>1 min ago</MessageFooter>
			</MessageContent>
		</Message>
	</MessageGroup>
);

export const Conversation: Story = () => (
	<MessageGroup className="w-96">
		<Message align="start">
			<MessageAvatar>
				<div className="size-8 rounded-full bg-muted-foreground/20" />
			</MessageAvatar>
			<MessageContent>
				<MessageHeader>Alice</MessageHeader>
				<p className="rounded-lg bg-muted px-3 py-2">Hey! Have you seen the new update?</p>
				<MessageFooter>2 min ago</MessageFooter>
			</MessageContent>
		</Message>
		<Message align="end">
			<MessageAvatar>
				<div className="size-8 rounded-full bg-primary/20" />
			</MessageAvatar>
			<MessageContent>
				<MessageHeader>You</MessageHeader>
				<p className="rounded-lg bg-primary px-3 py-2 text-primary-foreground">Yeah, it looks amazing!</p>
				<MessageFooter>1 min ago</MessageFooter>
			</MessageContent>
		</Message>
		<Message align="start">
			<MessageAvatar>
				<div className="size-8 rounded-full bg-muted-foreground/20" />
			</MessageAvatar>
			<MessageContent>
				<MessageHeader>Alice</MessageHeader>
				<p className="rounded-lg bg-muted px-3 py-2">
					The new features are really cool. I especially like the dark mode improvements.
				</p>
				<MessageFooter>Just now</MessageFooter>
			</MessageContent>
		</Message>
	</MessageGroup>
);
