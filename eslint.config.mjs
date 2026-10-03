import tsConfig from "@cmdniels/eslint-config/eslint/ts";
import webConfig from "@cmdniels/eslint-config/eslint/web";
import { defineConfig } from "eslint/config";

export default defineConfig([
	tsConfig,
	webConfig,
	{
		ignores: ["node_modules/**", "out/**", ".ladle/**/*.mjs"],
	},
]);
