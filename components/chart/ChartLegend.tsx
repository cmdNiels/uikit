import { type ComponentProps } from "react";
import { Legend as RechartsLegend } from "recharts";

export default function ChartLegend(props: ComponentProps<typeof RechartsLegend>) {
	return <RechartsLegend {...props} />;
}
