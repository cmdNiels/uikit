import { useEffect } from "react";
import { createTheme } from "ssr-themes";
import { bindTheme } from "ssr-themes/react";

import type { GlobalProvider } from "@ladle/react";

// @ts-ignore - CSS imports don't have types.
import "@/globals.css";

const ssrTheme = createTheme({
	themes: ["light", "dark"],
	defaultTheme: "light",
	enableSystem: false,
	attribute: "class",
});

const { ThemeProvider } = bindTheme(ssrTheme);

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
		<ThemeProvider forced={theme}>
			<div className="relative min-h-screen bg-background p-8 text-foreground">{children}</div>
		</ThemeProvider>
	);
};
