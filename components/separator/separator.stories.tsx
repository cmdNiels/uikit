import Separator from "./Separator";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Separator",
};

export const Horizontal: Story<Partial<ComponentProps<typeof Separator>>> = () => (
	<div className="w-[300px]">
		<div className="space-y-1">
			<h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
			<p className="text-sm text-muted-foreground">An open-source UI component library.</p>
		</div>
		<Separator className="my-4" />
		<div className="flex h-5 items-center space-x-4 text-sm">
			<div>Blog</div>
			<Separator orientation="vertical" />
			<div>Docs</div>
			<Separator orientation="vertical" />
			<div>Source</div>
		</div>
	</div>
);

export const Vertical: Story<Partial<ComponentProps<typeof Separator>>> = () => (
	<div className="flex h-20 items-center space-x-4 text-sm">
		<div>Item 1</div>
		<Separator orientation="vertical" />
		<div>Item 2</div>
		<Separator orientation="vertical" />
		<div>Item 3</div>
	</div>
);
