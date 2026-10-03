import { cva } from "class-variance-authority";

const statusIndicatorVariants = cva(
	"relative inline-flex size-2 shrink-0 transition-colors duration-1000 ease-in-out",
	{
		variants: {
			variant: {
				default: "text-green-500",
				warning: "text-orange-500",
				destructive: "text-red-500",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export default statusIndicatorVariants;
