import Button from "@/components/button/Button";

import Tooltip from "./Tooltip";
import TooltipContent from "./TooltipContent";
import TooltipTrigger from "./TooltipTrigger";

export default {
	title: "UI/Tooltip",
};

export const Default = () => (
	<Tooltip>
		<TooltipTrigger>
			<Button variant="outline">Hover me</Button>
		</TooltipTrigger>
		<TooltipContent>This is a tooltip</TooltipContent>
	</Tooltip>
);

export const SideTop = () => (
	<Tooltip>
		<TooltipTrigger>
			<Button variant="outline">Top</Button>
		</TooltipTrigger>
		<TooltipContent side="top">Tooltip on top</TooltipContent>
	</Tooltip>
);

export const SideBottom = () => (
	<Tooltip>
		<TooltipTrigger>
			<Button variant="outline">Bottom</Button>
		</TooltipTrigger>
		<TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
	</Tooltip>
);

export const SideLeft = () => (
	<Tooltip>
		<TooltipTrigger>
			<Button variant="outline">Left</Button>
		</TooltipTrigger>
		<TooltipContent side="left">Tooltip on left</TooltipContent>
	</Tooltip>
);

export const SideRight = () => (
	<Tooltip>
		<TooltipTrigger>
			<Button variant="outline">Right</Button>
		</TooltipTrigger>
		<TooltipContent side="right">Tooltip on right</TooltipContent>
	</Tooltip>
);
