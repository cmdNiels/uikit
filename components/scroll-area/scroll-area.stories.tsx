import ScrollArea from "./ScrollArea";
import ScrollBar from "./ScrollBar";

export default {
	title: "UI/ScrollArea",
};

export const Default = () => (
	<ScrollArea className="h-72 w-96 rounded-md border p-4">
		<div className="space-y-2">
			{Array.from({ length: 20 }).map((_, i) => (
				<div key={i} className="text-sm">
					Item {i + 1}: This is some scrollable content that demonstrates the scroll area component.
				</div>
			))}
		</div>
	</ScrollArea>
);

export const HorizontalScroll = () => (
	<ScrollArea className="w-96 rounded-md border">
		<div className="flex gap-4 p-4">
			{Array.from({ length: 20 }).map((_, i) => (
				<div key={i} className="flex size-32  shrink-0 items-center justify-center rounded-md bg-muted">
					{i + 1}
				</div>
			))}
		</div>
		<ScrollBar orientation="horizontal" />
	</ScrollArea>
);

export const BothDirections = () => (
	<ScrollArea className="h-72 w-96 rounded-md border">
		<div className="w-3xl space-y-2 p-4">
			{Array.from({ length: 20 }).map((_, i) => (
				<div key={i} className="text-sm whitespace-nowrap">
					Row {i + 1}: This is a wide row that extends beyond the viewport width to demonstrate both
					horizontal and vertical scrolling.
				</div>
			))}
		</div>
		<ScrollBar orientation="horizontal" />
	</ScrollArea>
);

export const LargeContent = () => (
	<ScrollArea className="h-96 w-full max-w-2xl rounded-md border p-6">
		<div className="space-y-4">
			<h2 className="text-2xl font-bold">Lorem Ipsum</h2>
			<p className="text-sm text-muted-foreground">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
				ex ea commodo consequat.
			</p>
			<p className="text-sm text-muted-foreground">
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum.
			</p>
			<p className="text-sm text-muted-foreground">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
				rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo.
			</p>
			<p className="text-sm text-muted-foreground">
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
				dolores eos qui ratione voluptatem sequi nesciunt.
			</p>
			<p className="text-sm text-muted-foreground">
				Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
				non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
			</p>
		</div>
	</ScrollArea>
);
