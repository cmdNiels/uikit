"use client";

import { useMemo, type CSSProperties, type ReactNode } from "react";

import cn from "@/cn";

import getPayloadConfigFromPayload from "./getPayloadConfigFromPayload";
import useChart from "./useChart";

import type { NameType, Payload, ValueType } from "recharts/types/component/DefaultTooltipContent";
import type { TooltipContentProps } from "recharts/types/component/Tooltip";

export default function ChartTooltipContent({
	active,
	payload,
	label,
	className,
	indicator = "dot",
	hideLabel = false,
	hideIndicator = false,
	labelFormatter,
	formatter,
	labelClassName,
	color,
	nameKey,
	labelKey,
}: TooltipContentProps<ValueType, NameType> & {
	className?: string;
	hideLabel?: boolean;
	hideIndicator?: boolean;
	indicator?: "line" | "dot" | "dashed";
	nameKey?: string;
	labelKey?: string;
	labelFormatter?: (
		label: TooltipContentProps<number, string>["label"],
		payload: TooltipContentProps<number, string>["payload"]
	) => ReactNode;
	formatter?: (
		value: number | string,
		name: string,
		item: Payload<number | string, string>,
		index: number,
		payload: ReadonlyArray<Payload<number | string, string>>
	) => ReactNode;
	labelClassName?: string;
	color?: string;
}) {
	const { config } = useChart();

	const tooltipLabel = useMemo(() => {
		if (hideLabel || !payload?.length) {
			return null;
		}

		const [item] = payload;
		const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
		const itemConfig = getPayloadConfigFromPayload(config, item, key);
		const value = (() => {
			const v = !labelKey && typeof label === "string" ? (config[label]?.label ?? label) : itemConfig?.label;

			return typeof v === "string" || typeof v === "number" ? v : undefined;
		})();

		if (labelFormatter) {
			return <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>;
		}

		if (!value) {
			return null;
		}

		return <div className={cn("font-medium", labelClassName)}>{value}</div>;
	}, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

	if (!active || !payload?.length) {
		return null;
	}

	const nestLabel = payload.length === 1 && indicator !== "dot";

	return (
		<div
			className={cn(
				"grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
				className
			)}
		>
			{!nestLabel ? tooltipLabel : null}
			<div className="grid gap-1.5">
				{payload.map((item, index) => {
					const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
					const itemConfig = getPayloadConfigFromPayload(config, item, key);
					const indicatorColor = color ?? item.payload.fill ?? item.color;

					return (
						<div
							key={item.dataKey}
							className={cn(
								"flex w-full flex-wrap items-stretch gap-2 [&>svg]:size-2.5  [&>svg]:text-muted-foreground",
								indicator === "dot" && "items-center"
							)}
						>
							{formatter && item?.value !== undefined && item.name ? (
								formatter(item.value, item.name, item, index, item.payload)
							) : (
								<>
									{itemConfig?.icon ? (
										<itemConfig.icon />
									) : (
										!hideIndicator && (
											<div
												className={cn(
													"shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
													{
														"size-2.5 ": indicator === "dot",
														"w-1": indicator === "line",
														"w-0 border-[1.5px] border-dashed bg-transparent":
															indicator === "dashed",
														"my-0.5": nestLabel && indicator === "dashed",
													}
												)}
												style={
													{
														"--color-bg": indicatorColor,
														"--color-border": indicatorColor,
													} as CSSProperties
												}
											/>
										)
									)}
									<div
										className={cn(
											"flex flex-1 justify-between leading-none",
											nestLabel ? "items-end" : "items-center"
										)}
									>
										<div className="grid gap-1.5">
											{nestLabel ? tooltipLabel : null}
											<span className="text-muted-foreground">
												{itemConfig?.label ?? item.name}
											</span>
										</div>
										{item.value && (
											<span className="font-mono font-medium text-foreground tabular-nums">
												{item.value.toLocaleString()}
											</span>
										)}
									</div>
								</>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
