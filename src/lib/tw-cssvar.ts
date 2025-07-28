export function getTailwindCssVar(
	variable: string,
	prefix: string = "color"
): string {
	return `var(--${prefix}-${variable})`;
}
