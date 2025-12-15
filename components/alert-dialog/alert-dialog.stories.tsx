import Button from "@/components/button/Button";

import AlertDialog from "./AlertDialog";
import AlertDialogAction from "./AlertDialogAction";
import AlertDialogCancel from "./AlertDialogCancel";
import AlertDialogContent from "./AlertDialogContent";
import AlertDialogDescription from "./AlertDialogDescription";
import AlertDialogFooter from "./AlertDialogFooter";
import AlertDialogHeader from "./AlertDialogHeader";
import AlertDialogTitle from "./AlertDialogTitle";
import AlertDialogTrigger from "./AlertDialogTrigger";

export default {
	title: "UI/AlertDialog",
};

export const Default = () => (
	<AlertDialog>
		<AlertDialogTrigger>
			<Button variant="outline">Open Alert</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
				<AlertDialogDescription>
					This action cannot be undone. This will permanently delete your account and remove your data from
					our servers.
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>
					<Button variant="outline">Cancel</Button>
				</AlertDialogCancel>
				<AlertDialogAction>
					<Button variant="destructive">Continue</Button>
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
);

export const Small = () => (
	<AlertDialog>
		<AlertDialogTrigger>
			<Button variant="outline">Delete Item</Button>
		</AlertDialogTrigger>
		<AlertDialogContent size="sm">
			<AlertDialogHeader>
				<AlertDialogTitle>Delete Item</AlertDialogTitle>
				<AlertDialogDescription>Are you sure you want to delete this item?</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>
					<Button variant="outline">Cancel</Button>
				</AlertDialogCancel>
				<AlertDialogAction>
					<Button variant="destructive">Delete</Button>
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
);

export const WithoutDescription = () => (
	<AlertDialog>
		<AlertDialogTrigger>
			<Button variant="outline">Confirm Action</Button>
		</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle>Confirm your action</AlertDialogTitle>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>
					<Button variant="outline">Cancel</Button>
				</AlertDialogCancel>
				<AlertDialogAction>
					<Button>Confirm</Button>
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
);
