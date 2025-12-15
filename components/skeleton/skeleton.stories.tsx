import Skeleton from "./Skeleton";

export default {
	title: "UI/Skeleton",
};

export const Default = () => <Skeleton className="h-12 w-[250px]" />;

export const Circle = () => <Skeleton className="size-12 rounded-full" />;

export const Card = () => (
	<div className="flex flex-col space-y-3">
		<Skeleton className="h-[125px] w-[250px] rounded-xl" />
		<div className="space-y-2">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
		</div>
	</div>
);

export const List = () => (
	<div className="space-y-2">
		<div className="flex items-center space-x-4">
			<Skeleton className="size-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
		<div className="flex items-center space-x-4">
			<Skeleton className="size-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	</div>
);
