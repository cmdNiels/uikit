import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@ladle/react').UserConfig} */
export default {
	stories: "components/**/*.stories.{tsx,jsx}",
	viteConfig: path.resolve(__dirname, "../vite.config.mts"),
	addons: {
		theme: {
			enabled: true,
			defaultState: "light",
		},
		mode: {
			enabled: true,
			defaultState: "full",
		},
		control: {
			enabled: true,
			defaultState: {},
		},
		action: {
			enabled: true,
			defaultState: [],
		},
		width: {
			enabled: true,
			options: {
				mobile: 375, // Mobile (iPhone SE)
				sm: 640, // Tailwind sm breakpoint
				md: 768, // Tailwind md breakpoint
				lg: 1024, // Tailwind lg breakpoint
				xl: 1280, // Tailwind xl breakpoint
				"2xl": 1536, // Tailwind 2xl breakpoint
			},
			defaultState: 1024, // 0 = full width (no viewport restriction)
		},
	},
};
