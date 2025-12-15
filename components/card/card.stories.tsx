import Card from "./Card";
import CardAction from "./CardAction";
import CardContent from "./CardContent";
import CardDescription from "./CardDescription";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";

export default {
	title: "UI/Card",
};

export const Default = () => (
	<Card className="w-96">
		<CardHeader>
			<CardTitle>Card Title</CardTitle>
			<CardDescription>Card description goes here</CardDescription>
		</CardHeader>
		<CardContent>
			<p>Card content area with some example text to demonstrate the layout.</p>
		</CardContent>
		<CardFooter>
			<p className="text-sm text-muted-foreground">Card footer</p>
		</CardFooter>
	</Card>
);

export const WithAction = () => (
	<Card className="w-96">
		<CardHeader>
			<CardTitle>Notification Settings</CardTitle>
			<CardDescription>Manage your notification preferences</CardDescription>
		</CardHeader>
		<CardContent>
			<p>You will receive notifications for important updates.</p>
		</CardContent>
		<CardFooter>
			<CardAction>Save Changes</CardAction>
		</CardFooter>
	</Card>
);

export const Small = () => (
	<Card size="sm" className="w-96">
		<CardHeader>
			<CardTitle>Small Card</CardTitle>
			<CardDescription>This is a smaller card variant</CardDescription>
		</CardHeader>
		<CardContent>
			<p>Compact content area.</p>
		</CardContent>
	</Card>
);
