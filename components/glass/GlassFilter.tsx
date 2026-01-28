"use client";

import React, { type HTMLAttributes } from "react";

import GlassDisplacementMap from "./GlassDisplacementMap";

export default function GlassFilter({
	id,
	depth = 10,
	height,
	width,
	radius,
	strength = 20,
	chromaticAberration = 2,
}: HTMLAttributes<HTMLDivElement> & {
	id: string;
	depth?: number;
	height: number;
	width: number;
	strength?: number;
	chromaticAberration?: number;
	radius: { bottomLeft: number; bottomRight: number; topLeft: number; topRight: number };
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="0"
			height="0"
			style={{ position: "absolute", overflow: "hidden" }}
		>
			<defs>
				<filter id={id} colorInterpolationFilters="sRGB">
					<feImage
						x="0"
						y="0"
						height={height}
						width={width}
						href={GlassDisplacementMap({
							height,
							width,
							radius,
							depth,
						})}
						result="displacementMap"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="displacementMap"
						scale={strength + chromaticAberration * 2}
						xChannelSelector="R"
						yChannelSelector="G"
					/>
					<feColorMatrix
						type="matrix"
						values="1 0 0 0 0
									0 0 0 0 0
									0 0 0 0 0
									0 0 0 1 0"
						result="displacedR"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="displacementMap"
						scale={strength + chromaticAberration}
						xChannelSelector="R"
						yChannelSelector="G"
					/>
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0
									0 1 0 0 0
									0 0 0 0 0
									0 0 0 1 0"
						result="displacedG"
					/>
					<feDisplacementMap
						in="SourceGraphic"
						in2="displacementMap"
						scale={strength}
						xChannelSelector="R"
						yChannelSelector="G"
					/>
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0
									0 0 0 0 0
									0 0 1 0 0
									0 0 0 1 0"
						result="displacedB"
					/>
					<feBlend in="displacedR" in2="displacedG" mode="screen" />
					<feBlend in2="displacedB" mode="screen" />
				</filter>
			</defs>
		</svg>
	);
}
