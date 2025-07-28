import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768; // Tailwind's md breakpoint

export const useIsMobile = (): boolean => {
	const [isMobile, setIsMobile] = useState(() => {
		if (typeof window === "undefined") return false;
		return window.innerWidth < MOBILE_BREAKPOINT;
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia(
			`(max-width: ${MOBILE_BREAKPOINT}px)`
		);

		const handleChange = () => setIsMobile(mediaQuery.matches);

		// Set initial value
		handleChange();

		// Add listener
		mediaQuery.addEventListener("change", handleChange);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return isMobile;
};
