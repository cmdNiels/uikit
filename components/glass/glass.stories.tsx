import Glass from "./Glass";

import type { Story } from "@ladle/react";
import type { ComponentProps } from "react";

export default {
	title: "UI/Glass",
};

export const Default: Story<
	Partial<ComponentProps<typeof Glass>> & {
		backgroundImage: string;
	}
> = ({ depth, refraction, backgroundImage }) => (
	<>
		<div
			className="fixed inset-0 size-full bg-cover bg-center"
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		/>
		<Glass depth={depth} refraction={refraction} className="rounded-2xl p-8">
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-white">Liquid Glass Effect</h1>
				<p className="text-white/90">
					This component creates a realistic glass material effect using SVG filters and backdrop blur.
				</p>
				<div className="flex gap-2">
					<div className="size-12 rounded-lg bg-white/20" />
					<div className="size-12 rounded-lg bg-white/20" />
					<div className="size-12 rounded-lg bg-white/20" />
				</div>
			</div>
		</Glass>
	</>
);

Default.args = {
	depth: 10,
	refraction: false,
	backgroundImage:
		"https://media.idownloadblog.com/wp-content/uploads/2020/06/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog.jpg",
};

Default.argTypes = {
	depth: {
		control: { type: "number" },
		defaultValue: 10,
	},
	refraction: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	backgroundImage: {
		control: { type: "text" },
		defaultValue:
			"https://media.idownloadblog.com/wp-content/uploads/2020/06/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog.jpg",
	},
};

export const Minimal: Story<
	Partial<ComponentProps<typeof Glass>> & {
		backgroundImage: string;
	}
> = ({ depth, refraction, backgroundImage }) => (
	<>
		<div
			className="fixed inset-0 size-full bg-cover bg-center"
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		/>
		<Glass depth={depth} refraction={refraction} className="rounded-xl p-6">
			<div className="flex items-center gap-4">
				<div className="size-12 rounded-full bg-white/20" />
				<div>
					<p className="font-medium text-white">Minimal Glass</p>
					<p className="text-sm text-white/60">Default settings</p>
				</div>
			</div>
		</Glass>
	</>
);

Minimal.args = {
	depth: 10,
	refraction: false,
	backgroundImage:
		"https://media.idownloadblog.com/wp-content/uploads/2020/06/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog.jpg",
};

Minimal.argTypes = {
	depth: {
		control: { type: "number" },
		defaultValue: 10,
	},
	refraction: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	backgroundImage: {
		control: { type: "text" },
		defaultValue:
			"https://media.idownloadblog.com/wp-content/uploads/2020/06/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog.jpg",
	},
};

export const Nested: Story<
	Partial<ComponentProps<typeof Glass>> & {
		backgroundImage: string;
	}
> = ({ depth, refraction, backgroundImage }) => (
	<>
		<div
			className="fixed inset-0 size-full bg-cover bg-center"
			style={{
				backgroundImage: `url(${backgroundImage})`,
			}}
		/>
		<Glass depth={depth} refraction={refraction} className="rounded-3xl p-8">
			<div className="flex flex-col gap-6">
				<h1 className="text-3xl font-bold text-white">Nested Glass Layers</h1>
				<p className="text-white/90">Glass effects can be layered for depth</p>
				<Glass depth={depth} refraction={refraction} className="rounded-xl p-6">
					<div className="flex flex-col gap-4">
						<h2 className="text-xl font-semibold text-white">Inner Layer</h2>
						<p className="text-sm text-white/80">
							This creates a multi-layered glass effect with different properties.
						</p>
						<div className="flex gap-2">
							<div className="size-8 rounded-sm bg-white/20" />
							<div className="size-8 rounded-sm bg-white/20" />
							<div className="size-8 rounded-sm bg-white/20" />
						</div>
					</div>
				</Glass>
			</div>
		</Glass>
	</>
);

Nested.args = {
	depth: 10,
	refraction: false,
	backgroundImage:
		"https://media.idownloadblog.com/wp-content/uploads/2020/06/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog.jpg",
};

Nested.argTypes = {
	depth: {
		control: { type: "number" },
		defaultValue: 10,
	},
	refraction: {
		control: { type: "boolean" },
		defaultValue: false,
	},
	backgroundImage: {
		control: { type: "text" },
		defaultValue:
			"https://media.idownloadblog.com/wp-content/uploads/2020/06/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog.jpg",
	},
};
