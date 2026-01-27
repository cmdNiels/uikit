import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import type { GlobalProvider } from "@ladle/react";

import "@/globals.css";

export const Provider: GlobalProvider = ({ children, globalState }) => {
	const theme = globalState.theme === "dark" ? "dark" : "light";

	useEffect(() => {
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(theme);

		const iframe = document.querySelector<HTMLIFrameElement>("iframe.ladle-iframe");
		try {
			if (iframe?.contentDocument) {
				iframe.contentDocument.documentElement.classList.remove("light", "dark");
				iframe.contentDocument.documentElement.classList.add(theme);
			}
		} catch (_e) {
			// Cross-origin iframe, can't access
		}
	}, [theme]);

	return (
		<ThemeProvider attribute="class" defaultTheme={theme} forcedTheme={theme} enableSystem={false}>
			<div className="relative min-h-screen bg-background p-8 text-foreground">{children}</div>
		</ThemeProvider>
	);
};
