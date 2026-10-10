const radiusSizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"] as const;

const radiusClass: Record<(typeof radiusSizes)[number], string> = {
	xs: "rounded-xs",
	sm: "rounded-sm",
	md: "rounded-md",
	lg: "rounded-lg",
	xl: "rounded-xl",
	"2xl": "rounded-2xl",
	"3xl": "rounded-3xl",
	"4xl": "rounded-4xl",
};

export default {
	title: "UI/Corners",
};

export const Radii = () => (
	<div className="flex flex-wrap gap-6 p-6">
		{radiusSizes.map((size) => (
			<div key={size} className="flex flex-col items-center gap-2">
				<div
					className={`flex size-28 items-center justify-center border bg-card ${radiusClass[size]}`}
				>
					<span className="text-sm text-muted-foreground">{size}</span>
				</div>
				<code className="text-xs text-muted-foreground">{radiusClass[size]}</code>
			</div>
		))}
	</div>
);
