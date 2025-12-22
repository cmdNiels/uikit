export default {
	title: "UI/Colors",
};

export const Colors = () => (
	<div className="flex flex-wrap gap-2">
		<div className="flex size-16 items-center justify-center rounded-sm border bg-background text-center text-xs text-black dark:text-white">
			background
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-foreground text-center text-xs text-white dark:text-black">
			foreground
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-card text-center text-xs text-black dark:text-white">
			card
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-card-foreground text-center text-xs text-white dark:text-black">
			card foreground
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-primary text-center text-xs text-white dark:text-black">
			primary
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-primary-foreground text-center text-xs text-black dark:text-white">
			primary foreground
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-secondary text-center text-xs text-black dark:text-white">
			secondary
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-secondary-foreground text-center text-xs text-white dark:text-black">
			secondary foreground
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-muted text-center text-xs text-black dark:text-white">
			muted
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-muted-foreground text-center text-xs text-white dark:text-black">
			muted foreground
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-accent text-center text-xs text-black dark:text-white">
			accent
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-accent-foreground text-center text-xs text-white dark:text-black">
			accent foreground
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-destructive text-center text-xs text-white dark:text-black">
			destructive
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-border text-center text-xs text-black dark:text-white">
			border
		</div>
		<div className="flex size-16 items-center justify-center rounded-sm border bg-ring text-center text-xs text-black dark:text-white">
			ring
		</div>
	</div>
);
