import { useEffect, useState, useRef } from "react";

/**
 * Custom hook to prevent mobile zoom and handle additional behaviors for all inputs within a form
 * @param minFontSize - Minimum font size to prevent zoom on mobile devices
 * @param options - Optional settings for the hook
 */

export function useMobileInput(
	minFontSize: number = 16,
	options?: {
		disableAutocorrect?: boolean;
		enableAutofocus?: boolean;
		validationRules?: { [key: string]: (value: string) => string | null };
	}
) {
	const formRef = useRef<HTMLFormElement>(null);
	const [validationErrors, setValidationErrors] = useState<{
		[key: string]: string;
	}>({});

	useEffect(() => {
		if (formRef.current) {
			// Select all input, textarea, and select elements within the form
			const inputs = formRef.current.querySelectorAll<
				HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
			>("input, textarea, select");

			inputs.forEach((input) => {
				// Ensure the font size is at least minFontSize to prevent zoom on mobile
				const style = window.getComputedStyle(input);
				const fontSize = parseFloat(style.fontSize);

				if (fontSize < minFontSize) {
					input.style.fontSize = `${minFontSize}px`;
				}

				// Optionally disable autocorrect
				if (options?.disableAutocorrect) {
					input.setAttribute("autocorrect", "off");
					input.setAttribute("spellcheck", "false");
					input.setAttribute("autocomplete", "off");
				}

				// Optionally handle autofocus
				if (
					options?.enableAutofocus &&
					input.getAttribute("autofocus")
				) {
					input.focus();
				}

				// Apply validation on blur
				if (
					options?.validationRules &&
					options.validationRules[input.name]
				) {
					input.addEventListener("blur", (e) => {
						const value = (e.target as HTMLInputElement).value;
						const errorMessage =
							options.validationRules![input.name](value);
						setValidationErrors((prev) => ({
							...prev,
							[input.name]: errorMessage || "",
						}));
					});
				}
			});
		}
	}, [minFontSize, options]);

	return { formRef, validationErrors };
}
