import Alert from "./Alert";
import AlertAction from "./AlertAction";
import AlertDescription from "./AlertDescription";
import AlertTitle from "./AlertTitle";

export default {
	title: "UI/Alert",
};

export const Default = () => (
	<Alert className="w-96">
		<AlertTitle>Heads up!</AlertTitle>
		<AlertDescription>You can add components to your app using the cli.</AlertDescription>
	</Alert>
);

export const Destructive = () => (
	<Alert variant="destructive" className="w-96">
		<AlertTitle>Error</AlertTitle>
		<AlertDescription>Your session has expired. Please log in again.</AlertDescription>
	</Alert>
);

export const WithAction = () => (
	<Alert className="w-96">
		<AlertTitle>Update Available</AlertTitle>
		<AlertDescription>A new version of the app is available.</AlertDescription>
		<AlertAction>Update Now</AlertAction>
	</Alert>
);
