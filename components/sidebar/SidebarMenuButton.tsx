import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

import cn from "@/cn";
import Tooltip from "@/components/tooltip/Tooltip";
import TooltipContent from "@/components/tooltip/TooltipContent";
import TooltipTrigger from "@/components/tooltip/TooltipTrigger";

import sidebarMenuButtonVariants from "./sidebarMenuButtonVariants";
import useSidebar from "./useSidebar";

export default function SidebarMenuButton({
	render,
	isActive = false,
	variant = "default",
	size = "default",
	tooltip,
	className,
	...props
}: useRender.ComponentProps<"button"> &
	ComponentProps<"button"> & {
		isActive?: boolean;
		tooltip?: string | ComponentProps<typeof TooltipContent>;
	} & VariantProps<typeof sidebarMenuButtonVariants>) {
	const { isMobile, state } = useSidebar();
	const comp = useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(
			{
				className: cn(sidebarMenuButtonVariants({ variant, size }), className),
			},
			props
		),
		render: !tooltip ? render : TooltipTrigger,
		state: {
			slot: "sidebar-menu-button",
			sidebar: "menu-button",
			size,
			active: isActive,
		},
	});

	if (!tooltip) {
		return comp;
	}

	if (typeof tooltip === "string") {
		tooltip = {
			children: tooltip,
		};
	}

	return (
		<Tooltip>
			{comp}
			<TooltipContent side="right" align="center" hidden={state !== "collapsed" || isMobile} {...tooltip} />
		</Tooltip>
	);
}
