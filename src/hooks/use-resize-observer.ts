import { useEffect } from "react";

export function useResizeObserver<T extends HTMLElement>(
	ref: React.RefObject<T | null>,
	onResize: (height: number) => void
) {
	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.contentRect) {
					onResize(entry.contentRect.height);
				}
			}
		});

		observer.observe(el);

		return () => {
			observer.disconnect();
		};
	}, [ref, onResize]);
}
