import Empty from "./Empty";
import EmptyContent from "./EmptyContent";
import EmptyDescription from "./EmptyDescription";
import EmptyHeader from "./EmptyHeader";
import EmptyMedia from "./EmptyMedia";
import EmptyTitle from "./EmptyTitle";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Empty",
};

export const Default: Story<{
	title: string;
	description: string;
}> = ({ title, description }) => (
	<Empty className="max-w-md">
		<EmptyHeader>
			<EmptyTitle>{title}</EmptyTitle>
			<EmptyDescription>{description}</EmptyDescription>
		</EmptyHeader>
	</Empty>
);

Default.args = {
	title: "No results found",
	description: "Try adjusting your search or filter to find what you're looking for.",
};

Default.argTypes = {
	title: {
		control: { type: "text" },
		defaultValue: "No results found",
	},
	description: {
		control: { type: "text" },
		defaultValue: "Try adjusting your search or filter to find what you're looking for.",
	},
};

export const WithIcon: Story<
	Partial<ComponentProps<typeof EmptyMedia>> & {
		title: string;
		description: string;
	}
> = ({ variant, title, description }) => (
	<Empty className="max-w-md">
		<EmptyHeader>
			<EmptyMedia variant={variant}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.3-4.3" />
				</svg>
			</EmptyMedia>
			<EmptyTitle>{title}</EmptyTitle>
			<EmptyDescription>{description}</EmptyDescription>
		</EmptyHeader>
	</Empty>
);

WithIcon.args = {
	variant: "icon",
	title: "No items found",
	description: "We couldn't find any items matching your search.",
};

WithIcon.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "icon"],
		defaultValue: "icon",
	},
	title: {
		control: { type: "text" },
		defaultValue: "No items found",
	},
	description: {
		control: { type: "text" },
		defaultValue: "We couldn't find any items matching your search.",
	},
};

export const WithContent: Story<{
	title: string;
	description: string;
	contentText: string;
}> = ({ title, description, contentText }) => (
	<Empty className="max-w-md">
		<EmptyHeader>
			<EmptyMedia variant="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 15V6" />
					<path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
					<path d="M12 12H3" />
					<path d="M16 6H3" />
					<path d="M12 18H3" />
				</svg>
			</EmptyMedia>
			<EmptyTitle>{title}</EmptyTitle>
			<EmptyDescription>{description}</EmptyDescription>
		</EmptyHeader>
		<EmptyContent>
			<p>{contentText}</p>
		</EmptyContent>
	</Empty>
);

WithContent.args = {
	title: "No notifications",
	description: "You're all caught up!",
	contentText: "When you have new notifications, they'll appear here.",
};

WithContent.argTypes = {
	title: {
		control: { type: "text" },
		defaultValue: "No notifications",
	},
	description: {
		control: { type: "text" },
		defaultValue: "You're all caught up!",
	},
	contentText: {
		control: { type: "text" },
		defaultValue: "When you have new notifications, they'll appear here.",
	},
};
