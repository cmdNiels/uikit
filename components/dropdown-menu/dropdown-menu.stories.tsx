import { IconSettings, IconUser } from "@tabler/icons-react";

import Button from "@/components/button/Button";

import DropdownMenu from "./DropdownMenu";
import DropdownMenuContent from "./DropdownMenuContent";
import DropdownMenuItem from "./DropdownMenuItem";
import DropdownMenuLabel from "./DropdownMenuLabel";
import DropdownMenuSeparator from "./DropdownMenuSeparator";
import DropdownMenuTrigger from "./DropdownMenuTrigger";

export default {
	title: "UI/DropdownMenu",
};

export const Default = () => (
	<DropdownMenu>
		<DropdownMenuTrigger>
			<Button variant="outline">Open Menu</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuLabel>My Account</DropdownMenuLabel>
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

export const WithDestructive = () => (
	<DropdownMenu>
		<DropdownMenuTrigger>
			<Button variant="outline">Actions</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<DropdownMenuItem>Edit</DropdownMenuItem>
			<DropdownMenuItem>Duplicate</DropdownMenuItem>
			<DropdownMenuSeparator />
			<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
		</DropdownMenuContent>
	</DropdownMenu>
);
