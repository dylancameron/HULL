import { useEffect, useState } from "react";

export type ColorMode = "light" | "dark" | "system";
export type ThemeName = "violet" | "celtic" | "monza";

interface ThemeSettings {
	mode: ColorMode;
	theme: ThemeName;
}

const DEFAULT_THEME: ThemeSettings = {
	mode: "system",
	theme: "violet",
};

function getSystemTheme(): ColorMode {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export function useTheme(): [
	ThemeSettings,
	(
		update:
			| Partial<ThemeSettings>
			| ((prev: ThemeSettings) => ThemeSettings)
	) => void,
	ColorMode
] {
	const [settings, setSettings] = useState<ThemeSettings>(() => {
		if (typeof localStorage !== "undefined") {
			const stored = localStorage.getItem("themeSettings");
			if (stored) return JSON.parse(stored);
		}
		return DEFAULT_THEME;
	});

	const [systemMode, setSystemMode] = useState<ColorMode>(getSystemTheme());

	const effectiveMode: ColorMode =
		settings.mode === "system" ? systemMode : settings.mode;

	useEffect(() => {
		const currentTheme = `${settings.theme}-${effectiveMode}`;
		console.log("Applying theme:", currentTheme);
		document.documentElement.setAttribute("data-theme", currentTheme);
		localStorage.setItem("themeSettings", JSON.stringify(settings));
	}, [settings, effectiveMode]);

	useEffect(() => {
		if (settings.mode !== "system") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const listener = () => setSystemMode(getSystemTheme());
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [settings.mode]);

	const updateSettings = (
		update:
			| Partial<ThemeSettings>
			| ((prev: ThemeSettings) => ThemeSettings)
	) => {
		if (typeof update === "function") {
			setSettings((prev) => update(prev));
		} else {
			setSettings((prev) => ({ ...prev, ...update }));
		}
	};
	return [settings, updateSettings, effectiveMode];
}
