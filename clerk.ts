import { experimental_createTheme } from "@clerk/themes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const clerkTheme: any = experimental_createTheme({
	name: "uikit",
	cssLayerName: "components",
	variables: {
		colorBackground: "var(--background)",
		colorDanger: "var(--destructive)",
		colorForeground: "var(--foreground)",
		colorInput: "var(--card)",
		colorInputBackground: "var(--card)",
		colorInputForeground: "var(--card-foreground)",
		colorModalBackdrop: "oklch(0 0 0 / 0.5)",
		colorMuted: "var(--muted)",
		colorMutedForeground: "var(--muted-foreground)",
		colorNeutral: "var(--foreground)",
		colorPrimary: "var(--primary)",
		colorPrimaryForeground: "var(--primary-foreground)",
		colorRing: "var(--ring)",
		colorTextOnPrimaryBackground: "var(--primary-foreground)",
		colorTextSecondary: "var(--muted-foreground)",
		borderRadius: "0.375rem",
		fontSize: "0.875rem",
		fontWeight: {
			normal: "400",
			medium: "500",
			semibold: "600",
			bold: "600",
		},
	},
	elements: {
		// Cards & Containers
		card: "rounded-xl border border-border bg-card shadow-xs text-card-foreground",
		pricingTableCard: "rounded-xl border border-border bg-card shadow-xs text-card-foreground",
		cardBox: "rounded-xl border border-border bg-card shadow-xs text-card-foreground",
		popoverBox: "rounded-md border border-border bg-card shadow-md text-card-foreground",
		userButtonPopoverMain: "rounded-md border border-border bg-card shadow-md text-card-foreground",
		userButtonPopoverFooter: "bg-card",
		navbarMobileMenuRow: "bg-card",
		navbar: "bg-card",
		pageScrollBox: "bg-card",
		footer: "border-border bg-card",

		// Inputs
		formFieldInput:
			"h-9 rounded-md border border-border bg-card shadow-xs placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20",
		formFieldLabel: "text-sm font-medium text-foreground",

		// Buttons
		formButtonPrimary:
			"h-9 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
		socialButtonsBlockButton:
			"h-9 rounded-md border border-border bg-card shadow-xs hover:bg-muted focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",

		// Remove Clerk's default styling
		button: {
			'&[data-variant="solid"]::after': {
				display: "none",
			},
		},

		// Provider Icons
		providerIcon__apple: "dark:invert",
		providerIcon__github: "dark:invert",
		providerIcon__okx_wallet: "dark:invert",
		providerIcon__vercel: "dark:invert",
		providerIcon__linear: "dark:invert",
		providerIcon__notion: "dark:invert",

		pricingTableCardTitle: "text-2xl font-semibold",
	},
});
