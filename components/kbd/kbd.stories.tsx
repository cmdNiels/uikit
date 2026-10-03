import { IconCommand } from "@tabler/icons-react";

import Kbd from "./Kbd";
import KbdGroup from "./KbdGroup";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Kbd",
};

export const Default: Story<Partial<ComponentProps<typeof Kbd>>> = ({ children }) => <Kbd>{children}</Kbd>;

Default.args = {
	children: "K",
};

Default.argTypes = {
	children: {
		control: { type: "text" },
		defaultValue: "K",
	},
};

export const WithIcon: Story = () => (
	<Kbd>
		<IconCommand />
	</Kbd>
);

export const Group: Story = () => (
	<KbdGroup>
		<Kbd>
			<IconCommand />
		</Kbd>
		<Kbd>K</Kbd>
	</KbdGroup>
);

export const MultipleKeys: Story = () => (
	<KbdGroup>
		<Kbd>Ctrl</Kbd>
		<Kbd>Shift</Kbd>
		<Kbd>P</Kbd>
	</KbdGroup>
);
