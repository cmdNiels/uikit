import tsConfig from "@cmdniels/eslint-config/ts";
import webConfig from "@cmdniels/eslint-config/web";
import { defineConfig } from "eslint/config";

export default defineConfig([
	tsConfig,
	webConfig,
	{
		ignores: ["node_modules/**", ".next/**", "out/**", ".ladle/**/*.mjs"],
	},
]);
