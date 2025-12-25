import { IconSettings, IconUser } from "@tabler/icons-react";

import Button from "@/components/button/Button";

import DropdownMenu from "./DropdownMenu";
import DropdownMenuContent from "./DropdownMenuContent";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownMenuLabel from "./DropdownMenuLabel";
import DropdownMenuSeparator from "./DropdownMenuSeparator";
import DropdownMenuTrigger from "./DropdownMenuTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/DropdownMenu",
};

export const Default: Story<
	Partial<ComponentProps<typeof DropdownMenu>> & {
		buttonText: string;
		labelText: string;
	}
> = ({ buttonText, labelText }) => (
	<DropdownMenu>
		<DropdownMenuTrigger>
			<Button variant="outline">{buttonText}</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuLabel>{labelText}</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuItem>
				<IconUser />
				Profile
			</DropdownMenuItem>
			<DropdownMenuItem>
				<IconSettings />
				Settings
			</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
);

Default.args = {
	buttonText: "Open Menu",
	labelText: "My Account",
};

Default.argTypes = {
	buttonText: {
		control: { type: "text" },
		defaultValue: "Open Menu",
	},
	labelText: {
		control: { type: "text" },
		defaultValue: "My Account",
	},
};
