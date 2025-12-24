"use client";

import { useId, type ComponentProps } from "react";
import { ResponsiveContainer as RechartsResponsiveContainer } from "recharts";

import cn from "@/cn";

import { ChartContext, type ChartConfig } from "./ChartContext";
import ChartStyle from "./ChartStyle";

export default function ChartContainer({
	id,
	className,
	children,
	config,
	...props
}: ComponentProps<"div"> & {
	config: ChartConfig;
	children: ComponentProps<typeof RechartsResponsiveContainer>["children"];
}) {
	const uniqueId = useId();
	const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;

	return (
		<ChartContext.Provider value={{ config }}>
			<div
				data-slot="chart"
				data-chart={chartId}
				className={cn(
					"flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-none [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-none [&_g]:focus:outline-none",
					className
				)}
				{...props}
			>
				<ChartStyle id={chartId} config={config} />
				<RechartsResponsiveContainer>{children}</RechartsResponsiveContainer>
			</div>
		</ChartContext.Provider>
	);
}
