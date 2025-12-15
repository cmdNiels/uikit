import Button from "@/components/button/Button";

import Popover from "./Popover";
import PopoverContent from "./PopoverContent";
import PopoverHeader from "./PopoverHeader";
import PopoverTitle from "./PopoverTitle";
import PopoverTrigger from "./PopoverTrigger";

export default {
	title: "UI/Popover",
};

export const Default = () => (
	<Popover>
		<PopoverTrigger>
			<Button variant="outline">Open Popover</Button>
		</PopoverTrigger>
		<PopoverContent>
			<PopoverHeader>
				<PopoverTitle>Popover Title</PopoverTitle>
			</PopoverHeader>
			<p>This is some content inside the popover.</p>
		</PopoverContent>
	</Popover>
);

export const SideTop = () => (
	<Popover>
		<PopoverTrigger>
			<Button variant="outline">Open Top</Button>
		</PopoverTrigger>
		<PopoverContent side="top">
			<PopoverTitle>Top Popover</PopoverTitle>
			<p>This popover appears on top.</p>
		</PopoverContent>
	</Popover>
);

export const SideLeft = () => (
	<Popover>
		<PopoverTrigger>
			<Button variant="outline">Open Left</Button>
		</PopoverTrigger>
		<PopoverContent side="left">
			<PopoverTitle>Left Popover</PopoverTitle>
			<p>This popover appears on the left.</p>
		</PopoverContent>
	</Popover>
);

export const SideRight = () => (
	<Popover>
		<PopoverTrigger>
			<Button variant="outline">Open Right</Button>
		</PopoverTrigger>
		<PopoverContent side="right">
			<PopoverTitle>Right Popover</PopoverTitle>
			<p>This popover appears on the right.</p>
		</PopoverContent>
	</Popover>
);
