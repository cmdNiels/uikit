import Tabs from "./Tabs";
import TabsContent from "./TabsContent";
import TabsList from "./TabsList";
import TabsTrigger from "./TabsTrigger";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Tabs",
};

export const Default: Story<Partial<ComponentProps<typeof Tabs>>> = ({ orientation }) => (
	<Tabs defaultValue="account" orientation={orientation} className="w-96">
		<TabsList>
			<TabsTrigger value="account">Account</TabsTrigger>
			<TabsTrigger value="password">Password</TabsTrigger>
			<TabsTrigger value="settings">Settings</TabsTrigger>
		</TabsList>
		<TabsContent value="account">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Account</h3>
				<p className="text-sm text-muted-foreground">
					Make changes to your account here. Click save when you&apos;re done.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="password">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Password</h3>
				<p className="text-sm text-muted-foreground">
					Change your password here. After saving, you&apos;ll be logged out.
				</p>
			</div>
		</TabsContent>
		<TabsContent value="settings">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Settings</h3>
				<p className="text-sm text-muted-foreground">Manage your application settings and preferences.</p>
			</div>
		</TabsContent>
	</Tabs>
);

Default.args = {
	orientation: "horizontal",
};

Default.argTypes = {
	orientation: {
		control: { type: "select" },
		options: ["horizontal", "vertical"],
		defaultValue: "horizontal",
	},
};

export const Vertical = () => (
	<Tabs defaultValue="account" orientation="vertical" className="w-96">
		<TabsList>
			<TabsTrigger value="account">Account</TabsTrigger>
			<TabsTrigger value="password">Password</TabsTrigger>
			<TabsTrigger value="settings">Settings</TabsTrigger>
		</TabsList>
		<TabsContent value="account">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Account</h3>
				<p className="text-sm text-muted-foreground">Make changes to your account here.</p>
			</div>
		</TabsContent>
		<TabsContent value="password">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Password</h3>
				<p className="text-sm text-muted-foreground">Change your password here.</p>
			</div>
		</TabsContent>
		<TabsContent value="settings">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Settings</h3>
				<p className="text-sm text-muted-foreground">Manage your settings.</p>
			</div>
		</TabsContent>
	</Tabs>
);

export const LineVariant: Story<Partial<ComponentProps<typeof TabsList>>> = ({ variant }) => (
	<Tabs defaultValue="overview" className="w-96">
		<TabsList variant={variant}>
			<TabsTrigger value="overview">Overview</TabsTrigger>
			<TabsTrigger value="analytics">Analytics</TabsTrigger>
			<TabsTrigger value="reports">Reports</TabsTrigger>
		</TabsList>
		<TabsContent value="overview">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Overview</h3>
				<p className="text-sm text-muted-foreground">View your dashboard overview and key metrics.</p>
			</div>
		</TabsContent>
		<TabsContent value="analytics">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Analytics</h3>
				<p className="text-sm text-muted-foreground">Deep dive into your analytics data.</p>
			</div>
		</TabsContent>
		<TabsContent value="reports">
			<div className="p-4">
				<h3 className="mb-2 font-semibold">Reports</h3>
				<p className="text-sm text-muted-foreground">Generate and view reports.</p>
			</div>
		</TabsContent>
	</Tabs>
);

LineVariant.args = {
	variant: "line",
};

LineVariant.argTypes = {
	variant: {
		control: { type: "select" },
		options: ["default", "line"],
		defaultValue: "line",
	},
};
