import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import type { GlobalProvider } from "@ladle/react";

import "@/globals.css";

export const Provider: GlobalProvider = ({ children, globalState }) => {
	const theme = globalState.theme === "dark" ? "dark" : "light";

	useEffect(() => {
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(theme);
	}, [theme]);

	return (
		<ThemeProvider attribute="class" defaultTheme={theme} forcedTheme={theme} enableSystem={false}>
			<div className="min-h-screen bg-background p-8 text-foreground">{children}</div>
		</ThemeProvider>
	);
};
