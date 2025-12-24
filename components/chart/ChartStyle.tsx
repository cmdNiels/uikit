import { type ChartConfig } from "./ChartContext";

const THEMES = { light: "", dark: ".dark" } as const; // Format: { THEME_NAME: CSS_SELECTOR }

export default function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
	const colorConfig = Object.entries(config).filter(([, _config]) => _config.theme ?? _config.color);

	if (!colorConfig.length) {
		return null;
	}

	return (
		<style
			dangerouslySetInnerHTML={{
				__html: Object.entries(THEMES)
					.map(
						([theme, prefix]) => `
            ${prefix} [data-chart=${id}] {
            ${colorConfig
				.map(([key, itemConfig]) => {
					const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ?? itemConfig.color;
					return color ? `  --color-${key}: ${color};` : null;
				})
				.join("\n")}
            }
            `
					)
					.join("\n"),
			}}
		/>
	);
}
