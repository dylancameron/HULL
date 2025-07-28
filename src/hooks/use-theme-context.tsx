import { useContext } from "react";
import { ThemeContext } from "@/components/providers/theme-context";

export function useThemeContext() {
	const ctx = useContext(ThemeContext);
	if (!ctx)
		throw new Error("useThemeContext must be used inside a ThemeProvider");
	return ctx;
}
