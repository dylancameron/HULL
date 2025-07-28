import { ThemeContext } from "@/components/providers/theme-context";
import { useTheme } from "@/hooks/use-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const state = useTheme();
	return (
		<ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
	);
}
