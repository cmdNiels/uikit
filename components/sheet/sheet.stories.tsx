import Button from "@/components/button/Button";
import Input from "@/components/input/Input";
import Label from "@/components/label/Label";

import Sheet from "./Sheet";
import SheetClose from "./SheetClose";
import SheetContent from "./SheetContent";
import SheetDescription from "./SheetDescription";
import SheetFooter from "./SheetFooter";
import SheetHeader from "./SheetHeader";
import SheetTitle from "./SheetTitle";
import SheetTrigger from "./SheetTrigger";

export default {
	title: "UI/Sheet",
};

export const Default = () => (
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open Sheet</Button>
		</SheetTrigger>
		<SheetContent>
			<SheetHeader>
				<SheetTitle>Sheet Title</SheetTitle>
				<SheetDescription>This is a description of the sheet. You can add any content here.</SheetDescription>
			</SheetHeader>
			<div className="flex flex-col gap-4 p-4">
				<p className="text-sm text-muted-foreground">
					Sheet content goes here. You can add forms, lists, or any other content.
				</p>
			</div>
			<SheetFooter>
				<SheetClose>
					<Button variant="outline">Cancel</Button>
				</SheetClose>
				<Button>Save Changes</Button>
			</SheetFooter>
		</SheetContent>
	</Sheet>
);

export const Right = () => (
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open from Right</Button>
		</SheetTrigger>
		<SheetContent side="right">
			<SheetHeader>
				<SheetTitle>Right Side Sheet</SheetTitle>
				<SheetDescription>This sheet opens from the right side (default).</SheetDescription>
			</SheetHeader>
			<div className="grid flex-1 auto-rows-min gap-6 px-4">
				<div className="grid gap-3">
					<Label htmlFor="sheet-demo-username">Username</Label>
					<Input id="sheet-demo-username" defaultValue="@cmdNiels" />
				</div>
			</div>
			<SheetFooter>
				<Button type="submit">Save changes</Button>
				<SheetClose render={<Button variant="outline">Close</Button>} />
			</SheetFooter>
		</SheetContent>
	</Sheet>
);

export const Left = () => (
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open from Left</Button>
		</SheetTrigger>
		<SheetContent side="left">
			<SheetHeader>
				<SheetTitle>Left Side Sheet</SheetTitle>
				<SheetDescription>This sheet opens from the left side.</SheetDescription>
			</SheetHeader>
			<div className="grid flex-1 auto-rows-min gap-6 px-4">
				<div className="grid gap-3">
					<Label htmlFor="sheet-demo-username">Username</Label>
					<Input id="sheet-demo-username" defaultValue="@cmdNiels" />
				</div>
			</div>
			<SheetFooter>
				<Button type="submit">Save changes</Button>
				<SheetClose render={<Button variant="outline">Close</Button>} />
			</SheetFooter>
		</SheetContent>
	</Sheet>
);

export const Top = () => (
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open from Top</Button>
		</SheetTrigger>
		<SheetContent side="top">
			<SheetHeader>
				<SheetTitle>Top Sheet</SheetTitle>
				<SheetDescription>This sheet opens from the top.</SheetDescription>
			</SheetHeader>
			<div className="flex flex-col gap-4 p-4">
				<p className="text-sm">Content appears from the top of the screen.</p>
			</div>
		</SheetContent>
	</Sheet>
);

export const Bottom = () => (
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open from Bottom</Button>
		</SheetTrigger>
		<SheetContent side="bottom">
			<SheetHeader>
				<SheetTitle>Bottom Sheet</SheetTitle>
				<SheetDescription>This sheet opens from the bottom.</SheetDescription>
			</SheetHeader>
			<div className="flex flex-col gap-4 p-4">
				<p className="text-sm">Content appears from the bottom of the screen.</p>
			</div>
		</SheetContent>
	</Sheet>
);

export const LongContent = () => (
	<Sheet>
		<SheetTrigger>
			<Button variant="outline">Open with Long Content</Button>
		</SheetTrigger>
		<SheetContent>
			<SheetHeader>
				<SheetTitle>Long Content Sheet</SheetTitle>
				<SheetDescription>This sheet contains a lot of content that scrolls.</SheetDescription>
			</SheetHeader>
			<div className="flex flex-col gap-4 p-4">
				{Array.from({ length: 20 }).map((_, i) => (
					<div key={i} className="flex flex-col gap-2">
						<Label htmlFor={`field-${i}`}>Field {i + 1}</Label>
						<Input id={`field-${i}`} placeholder={`Enter value for field ${i + 1}`} />
					</div>
				))}
			</div>
			<SheetFooter>
				<Button>Save All</Button>
				<SheetClose render={<Button variant="outline">Cancel</Button>} />
			</SheetFooter>
		</SheetContent>
	</Sheet>
);
