"use client";

import React, { useEffect, useState } from "react";
import {
	faClipboardCheck,
	faCopy,
	faDeleteLeft,
	faEnvelope,
	faEyeSlash,
	faEye,
} from "@awesome.me/kit-cbb97b3f25/icons/duotone/solid";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface DefaultInputProps {
	type?: string;
	name?: string;
	placeholder?: string;
	value?: string;
	className?: string;
	id?: string;
	required?: boolean;
	isIcon?: boolean;
	icon?: IconDefinition;
	error?: boolean;
	disabled?: boolean;
	errorMsg?: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
	isCopyable?: boolean;
	readOnly?: boolean;
	isPassword?: boolean;
}

const CustomInput: React.FC<DefaultInputProps> = ({
	type = "text",
	name = "",
	placeholder = "Placeholder",
	className = "",
	value,
	id,
	required,
	isIcon = true,
	icon = faEnvelope,
	error,
	disabled = false,
	onChange,
	onBlur,
	onFocus,
	isCopyable = false,
	readOnly = false,
	isPassword = false,
}: DefaultInputProps) => {
	const [isFocused, setIsFocused] = useState(false);
	const [internalError, setInternalError] = useState(false);
	const [copied, setCopied] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);

	// Re-validate error state as user types
	useEffect(() => {
		setInternalError(!!error);
	}, [error]);

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setIsFocused(true);
		onFocus?.(e);
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		setIsFocused(false);
		onBlur?.(e);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e);
		if (internalError) {
			setInternalError(false);
		}
	};

	const handleCopy = async () => {
		if (value) {
			try {
				await navigator.clipboard.writeText(value);
				setCopied(true);
				setTimeout(() => setCopied(false), 1500);
			} catch (err) {
				console.error("Failed to copy text: ", err);
			}
		}
	};

	const handleReset = () => {
		if (value) {
			setCopied(false);
			// Clear the input value
			if (onChange) {
				onChange({
					target: { value: "" },
				} as React.ChangeEvent<HTMLInputElement>);
			}
		}
	};

	const handlePasswordToggle = () => {
		setPasswordVisible(!passwordVisible);
	};

	const hasValue = value && value.length > 0;
	const isFilled = isFocused || hasValue;

	const inputClass = clsx(
		"w-full flex items-center hover:ring hover:ring-primary/25 justify-center border p-2.5 py-1.5 focus:outline-none",
		{
			// Read-only state
			"pr-13 bg-transparent text-primary border-primary": readOnly,
			// Default state
			"border-primary hover:bg-primary/5 text-primary placeholder:text-primary":
				!internalError && !disabled && !isFilled && !readOnly,

			// Active and filled state
			"border-text bg-primary/25 text-text placeholder:text-primary/75 placeholder:text-foreground":
				isFilled && !internalError && !disabled && !readOnly,

			// Error state
			"bg-transparent text-danger-foreground border-danger-foreground placeholder:text-danger-foreground":
				internalError,

			"pl-8": isIcon,
			"pl-2.5": !isIcon,
			"pr-8": isCopyable && value,
		},
		className
	);

	const iconColorClass = clsx("h-4 w-4", {
		"text-text": !internalError && !disabled && isFilled && !readOnly, // Filled icon color

		// Active icon color
		"text-primary": !internalError && !disabled && !isFilled,
		"text-danger-foreground": internalError,
		"text-black/50 bg-black/25": disabled,
	});

	const getPlaceholder = (placeholder: string, required: boolean) => {
		if (required && internalError) {
			return `${placeholder} is required`;
		}
		if (required) {
			return `${placeholder} *`;
		}
		return placeholder;
	};

	return (
		<div className="flex flex-col w-full mt-0">
			<div className="relative flex flex-1 w-full">
				<label
					htmlFor={id}
					className={`relative flex items-center w-full`}
				>
					{isIcon && (
						<>
							<div className="absolute start-0 flex items-center pl-2.5 pointer-events-none">
								<FontAwesomeIcon
									icon={icon}
									className={iconColorClass}
								/>
							</div>
						</>
					)}
					<input
						onBlur={handleBlur}
						type={
							isPassword
								? passwordVisible
									? "text"
									: "password"
								: type
						}
						id={id}
						name={name}
						className={inputClass}
						autoComplete="off"
						disabled={disabled}
						aria-label={placeholder}
						onChange={handleChange}
						onFocus={handleFocus}
						value={value}
						required={required}
						placeholder={getPlaceholder(
							placeholder,
							required ?? false
						)}
					/>
					{type === "password" && (
						<button
							title="Toggle Password Visibility"
							type="button"
							className="absolute right-2.5 cursor-pointer"
							onClick={handlePasswordToggle}
							disabled={disabled}
						>
							<FontAwesomeIcon
								icon={passwordVisible ? faEyeSlash : faEye}
								className={iconColorClass}
							/>
						</button>
					)}
					{isCopyable && (
						<div className="absolute right-2.5 gap-2 flex">
							<button
								title="Reset"
								type="button"
								className="relative cursor-pointer"
								onClick={handleReset}
								disabled={disabled}
							>
								<FontAwesomeIcon
									icon={faDeleteLeft}
									className={iconColorClass}
								/>
							</button>
							<button
								title={copied ? "Copied!" : "Copy"}
								type="button"
								className="relative cursor-pointer"
								onClick={handleCopy}
								disabled={disabled}
							>
								<FontAwesomeIcon
									icon={copied ? faClipboardCheck : faCopy}
									className={iconColorClass}
								/>
							</button>
						</div>
					)}
				</label>
			</div>
		</div>
	);
};

export { CustomInput };
