import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const smoothScrollTo = (
	element: HTMLElement,
	duration: number = 500,
	callback?: () => void
): void => {
	element.scrollIntoView({ behavior: "smooth" });
	if (callback) {
		setTimeout(() => {
			callback();
		}, duration);
	}
};

export const scrollToSection = (id: string) => {
	const element = document.getElementById(id);
	if (!element) return;

	const navbar = document.querySelector("[data-navbar]") as HTMLElement;
	const offset = (navbar?.offsetHeight || 0) - 2;

	const top = element.getBoundingClientRect().top + window.scrollY - offset;

	window.scrollTo({
		top,
		behavior: "smooth",
	});
};
