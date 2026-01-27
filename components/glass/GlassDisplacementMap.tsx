import { renderToStaticMarkup } from "react-dom/server";

/**
 * Creating the displacement map that is used by feDisplacementMap filter.
 * Gradients take into account the radius of the element.
 * This is why they start and end in the middle of the angle curve.
 */
export default function GlassDisplacementMap({
	height,
	width,
	radius,
	depth,
}: {
	height: number;
	width: number;
	radius: { bottomLeft: number; bottomRight: number; topLeft: number; topRight: number };
	depth: number;
}): string {
	const averageRadius = (radius.topLeft + radius.topRight + radius.bottomLeft + radius.bottomRight) / 4;

	const innerWidth = width - 2 * depth;
	const innerHeight = height - 2 * depth;

	const innerRadius = {
		topLeft: Math.max(0, radius.topLeft - depth),
		topRight: Math.max(0, radius.topRight - depth),
		bottomLeft: Math.max(0, radius.bottomLeft - depth),
		bottomRight: Math.max(0, radius.bottomRight - depth),
	};

	const createRoundedRectPath = (x: number, y: number, w: number, h: number, r: typeof radius) => {
		const maxRadius = Math.min(w / 2, h / 2);
		const tl = Math.min(r.topLeft, maxRadius);
		const tr = Math.min(r.topRight, maxRadius);
		const bl = Math.min(r.bottomLeft, maxRadius);
		const br = Math.min(r.bottomRight, maxRadius);

		return `
			M ${x + tl} ${y}
			L ${x + w - tr} ${y}
			Q ${x + w} ${y} ${x + w} ${y + tr}
			L ${x + w} ${y + h - br}
			Q ${x + w} ${y + h} ${x + w - br} ${y + h}
			L ${x + bl} ${y + h}
			Q ${x} ${y + h} ${x} ${y + h - bl}
			L ${x} ${y + tl}
			Q ${x} ${y} ${x + tl} ${y}
			Z
		`;
	};

	const svg = (
		<svg height={height} width={width} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient
					id="Y"
					x1="0"
					x2="0"
					y1={`${Math.ceil((averageRadius / height) * 15)}%`}
					y2={`${Math.floor(100 - (averageRadius / height) * 15)}%`}
				>
					<stop offset="0%" stopColor="#0F0" />
					<stop offset="100%" stopColor="#000" />
				</linearGradient>
				<linearGradient
					id="X"
					x1={`${Math.ceil((averageRadius / width) * 15)}%`}
					x2={`${Math.floor(100 - (averageRadius / width) * 15)}%`}
					y1="0"
					y2="0"
				>
					<stop offset="0%" stopColor="#F00" />
					<stop offset="100%" stopColor="#000" />
				</linearGradient>
			</defs>

			<rect x="0" y="0" height={height} width={width} fill="#808080" />
			<g filter="blur(2px)">
				<rect x="0" y="0" height={height} width={width} fill="#000080" />
				<rect x="0" y="0" height={height} width={width} fill="url(#Y)" style={{ mixBlendMode: "screen" }} />
				<rect x="0" y="0" height={height} width={width} fill="url(#X)" style={{ mixBlendMode: "screen" }} />
				<path
					d={createRoundedRectPath(depth, depth, innerWidth, innerHeight, innerRadius)}
					fill="#808080"
					filter={`blur(${depth}px)`}
				/>
			</g>
		</svg>
	);

	return `data:image/svg+xml;utf8,${encodeURIComponent(renderToStaticMarkup(svg))}`;
}
