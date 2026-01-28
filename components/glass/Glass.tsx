"use client";

import React, { type HTMLAttributes, useId, useRef, useEffect, useState } from "react";

import cn from "@/cn";

import GlassFilter from "./GlassFilter";

export default function Glass({
	children,
	className,
	depth = 10,
	zIndex = 0,
	refraction = false,
	...props
}: HTMLAttributes<HTMLDivElement> & {
	depth?: number;
	zIndex?: number;
	refraction?: boolean;
}) {
	const refractionFilterId = useId();
	const containerRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 200, height: 200 });
	const [radius, setRadius] = useState({ bottomLeft: 0, bottomRight: 0, topLeft: 0, topRight: 0 });

	useEffect(() => {
		const updateDimensions = () => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				const computedStyle = window.getComputedStyle(containerRef.current);

				const parseRadius = (value: string) => parseFloat(value) || 0;

				const radiusValues = {
					topLeft: parseRadius(computedStyle.borderTopLeftRadius),
					topRight: parseRadius(computedStyle.borderTopRightRadius),
					bottomLeft: parseRadius(computedStyle.borderBottomLeftRadius),
					bottomRight: parseRadius(computedStyle.borderBottomRightRadius),
				};

				const maxRadius = Math.min(rect.width, rect.height) / 2;

				setDimensions({
					width: rect.width || 200,
					height: rect.height || 200,
				});

				setRadius({
					topLeft: Math.min(radiusValues.topLeft, maxRadius),
					topRight: Math.min(radiusValues.topRight, maxRadius),
					bottomLeft: Math.min(radiusValues.bottomLeft, maxRadius),
					bottomRight: Math.min(radiusValues.bottomRight, maxRadius),
				});
			}
		};

		updateDimensions();

		const resizeObserver = new ResizeObserver(updateDimensions);
		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => resizeObserver.disconnect();
	}, [refraction]);

	const { width, height } = dimensions;

	const avarageSize = (width + height) / 2;

	const strength = avarageSize / 3;
	const chromaticAberration = avarageSize / 10;

	return (
		<>
			{refraction && (
				<GlassFilter
					id={refractionFilterId}
					depth={depth}
					height={height}
					width={width}
					radius={radius}
					strength={strength}
					chromaticAberration={chromaticAberration}
				/>
			)}
			<div
				{...props}
				ref={containerRef}
				className={cn("relative isolate overflow-hidden rounded-lg bg-card/10 shadow-xl", className)}
				style={{ zIndex }}
			>
				{refraction && (
					<div
						style={{
							content: "",
							position: "absolute",
							inset: 0,
							zIndex: zIndex - 1,
							opacity: 1,
							borderBottomLeftRadius: radius.bottomLeft,
							borderBottomRightRadius: radius.bottomRight,
							borderTopLeftRadius: radius.topLeft,
							borderTopRightRadius: radius.topRight,
							backdropFilter: `url(#${refractionFilterId})`,
							WebkitBackdropFilter: `url(#${refractionFilterId})`,
							willChange: "backdrop-filter, border-radius",
							pointerEvents: "none",
						}}
					/>
				)}
				<div
					style={{
						content: "",
						position: "absolute",
						inset: 0,
						zIndex: zIndex - 1,
						opacity: 1,
						borderBottomLeftRadius: radius.bottomLeft,
						borderBottomRightRadius: radius.bottomRight,
						borderTopLeftRadius: radius.topLeft,
						borderTopRightRadius: radius.topRight,
						boxShadow: `inset 0 0 8px 0px color-mix(in oklch, oklch(1 0 0) 50%, transparent)`,
						backdropFilter: `blur(2px) brightness(1.1) saturate(1.5)`,
						WebkitBackdropFilter: `blur(2px) brightness(1.1) saturate(1.5)`,
						willChange: "backdrop-filter, border-radius",
						pointerEvents: "none",
					}}
				/>
				{/* Content */}
				{children}
			</div>
		</>
	);
}
