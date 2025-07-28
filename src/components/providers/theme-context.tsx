import { createContext } from "react";
import { useTheme } from "@/hooks/use-theme";

export const ThemeContext = createContext<ReturnType<typeof useTheme> | null>(
	null
);
