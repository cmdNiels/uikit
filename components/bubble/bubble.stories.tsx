import Bubble from "./Bubble";
import BubbleContent from "./BubbleContent";
import BubbleGroup from "./BubbleGroup";
import BubbleReactions from "./BubbleReactions";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Bubble",
};

export const Default: Story<Partial<ComponentProps<typeof Bubble>>> = ({ variant, children }) => (
	<Bubble variant={variant}>
		<BubbleContent>{children}</BubbleContent>
	</Bubble>
);

Default.args = {
	variant: "default",
	children: "Hello, world!",
};

Default.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "secondary", "muted", "tinted", "outline", "ghost", "destructive"],
		defaultValue: "default",
	},
	children: {
		control: { type: "text" },
		defaultValue: "Hello, world!",
	},
};

export const WithReactions: Story = () => (
	<BubbleGroup className="w-96">
		<Bubble>
			<BubbleContent>That&apos;s awesome!</BubbleContent>
			<BubbleReactions>
				<span>🎉</span>
			</BubbleReactions>
		</Bubble>
	</BubbleGroup>
);
