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
				xsmall: 414,
				small: 640,
				medium: 768,
				large: 1024,
			},
			defaultState: 0,
		},
	},
};
