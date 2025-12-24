"use client";

import cn from "@/cn";

import getPayloadConfigFromPayload from "./getPayloadConfigFromPayload";
import useChart from "./useChart";

import type { LegendPayload } from "recharts/types/component/DefaultLegendContent";
import type { Props as LegendProps } from "recharts/types/component/Legend";

export default function ChartLegendContent({
	className,
	hideIcon = false,
	payload,
	verticalAlign = "bottom",
	nameKey,
}: {
	className?: string;
	hideIcon?: boolean;
	verticalAlign?: LegendProps["verticalAlign"];
	payload?: readonly LegendPayload[];
	nameKey?: string;
}) {
	const { config } = useChart();

	if (!payload?.length) {
		return null;
	}

	return (
		<div
			className={cn(
				"flex items-center justify-center gap-4",
				verticalAlign === "top" ? "pb-3" : "pt-3",
				className
			)}
		>
			{payload.map((item) => {
				const key = `${nameKey ?? item.dataKey ?? "value"}`;
				const itemConfig = getPayloadConfigFromPayload(config, item, key);

				return (
					<div
						key={item.value}
						className={cn("flex items-center gap-1.5 [&>svg]:size-3  [&>svg]:text-muted-foreground")}
					>
						{itemConfig?.icon && !hideIcon ? (
							<itemConfig.icon />
						) : (
							<div
								className="size-2  shrink-0 rounded-[2px]"
								style={{
									backgroundColor: item.color,
								}}
							/>
						)}
						{itemConfig?.label}
					</div>
				);
			})}
		</div>
	);
}
