import { type ComponentProps } from "react";
import { Tooltip as RechartsTooltip } from "recharts";

export default function ChartTooltip({ ...props }: ComponentProps<typeof RechartsTooltip>) {
	return <RechartsTooltip {...props} />;
}
