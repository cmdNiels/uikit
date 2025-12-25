import { IconArrowLeft, IconArrowRight, IconDeviceFloppy, IconPrinter, IconRefresh } from "@tabler/icons-react";

import ContextMenu from "./ContextMenu";
import ContextMenuCheckboxItem from "./ContextMenuCheckboxItem";
import ContextMenuContent from "./ContextMenuContent";
import ContextMenuItem from "./ContextMenuItem";
import ContextMenuLabel from "./ContextMenuLabel";
import ContextMenuSeparator from "./ContextMenuSeparator";
import ContextMenuTrigger from "./ContextMenuTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/ContextMenu",
};

export const Default: Story<
	Partial<ComponentProps<typeof ContextMenu>> & {
		withIcons: boolean;
	}
> = ({ withIcons }) => (
	<ContextMenu>
		<ContextMenuTrigger>
			<div className="flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</div>
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuItem>
				{withIcons && <IconArrowLeft />}
				Back
			</ContextMenuItem>
			<ContextMenuItem>
				{withIcons && <IconArrowRight />}
				Forward
			</ContextMenuItem>
			<ContextMenuItem>
				{withIcons && <IconRefresh />}
				Reload
			</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>
				{withIcons && <IconDeviceFloppy />}
				Save Page As...
			</ContextMenuItem>
			<ContextMenuItem>
				{withIcons && <IconPrinter />}
				Print...
			</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
);

Default.args = {
	withIcons: true,
};

Default.argTypes = {
	withIcons: {
		control: { type: "boolean" },
		defaultValue: true,
	},
};

export const WithCheckbox = () => (
	<ContextMenu>
		<ContextMenuTrigger>
			<div className="flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</div>
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuLabel>View Options</ContextMenuLabel>
			<ContextMenuSeparator />
			<ContextMenuCheckboxItem checked>Show Toolbar</ContextMenuCheckboxItem>
			<ContextMenuCheckboxItem>Show Sidebar</ContextMenuCheckboxItem>
			<ContextMenuCheckboxItem checked>Show Status Bar</ContextMenuCheckboxItem>
		</ContextMenuContent>
	</ContextMenu>
);
