import { IconArrowLeft, IconArrowRight, IconDeviceFloppy, IconPrinter, IconRefresh } from "@tabler/icons-react";

import ContextMenu from "./ContextMenu";
import ContextMenuCheckboxItem from "./ContextMenuCheckboxItem";
import ContextMenuContent from "./ContextMenuContent";
import ContextMenuItem from "./ContextMenuItem";
import ContextMenuLabel from "./ContextMenuLabel";
import ContextMenuSeparator from "./ContextMenuSeparator";
import ContextMenuTrigger from "./ContextMenuTrigger";

export default {
	title: "UI/ContextMenu",
};

export const Default = () => (
	<ContextMenu>
		<ContextMenuTrigger>
			<div className="flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</div>
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuItem>Back</ContextMenuItem>
			<ContextMenuItem>Forward</ContextMenuItem>
			<ContextMenuItem>Reload</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>Save Page As...</ContextMenuItem>
			<ContextMenuItem>Print...</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
);

export const Icons = () => (
	<ContextMenu>
		<ContextMenuTrigger>
			<div className="flex h-48 w-96 items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</div>
		</ContextMenuTrigger>
		<ContextMenuContent>
			<ContextMenuItem>
				<IconArrowLeft />
				Back
			</ContextMenuItem>
			<ContextMenuItem>
				<IconArrowRight />
				Forward
			</ContextMenuItem>
			<ContextMenuItem>
				<IconRefresh />
				Reload
			</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuItem>
				<IconDeviceFloppy />
				Save Page As...
			</ContextMenuItem>
			<ContextMenuItem>
				<IconPrinter />
				Print...
			</ContextMenuItem>
		</ContextMenuContent>
	</ContextMenu>
);

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
