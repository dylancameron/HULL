"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface CheckboxProps {
	label: string | React.ReactNode;
	checked: boolean;
	id: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	name?: string;
	error?: boolean;
	errorMsg?: string;
	required?: boolean;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({
	label,
	id,
	checked,
	onChange,
	onBlur,
	name = id,
	error,
	errorMsg,
	required,
}: CheckboxProps) => {
	const [internalError, setInternalError] = useState(false);

	useEffect(() => {
		setInternalError(!!error);
	}, [error]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e);
		if (internalError) setInternalError(false);
	};

	const checkboxClass = clsx(
		"group text-xs sm:text-sm gap-2 hover:ring-primary/25 hover:ring w-full flex-1 py-2 px-3 border flex outline-transparent items-center cursor-pointer relative",
		// Checked
		"has-checked:border-primary has-checked:bg-primary/25",
		{
			"bg-transparent text-danger-foreground border-danger-foreground":
				internalError,
			"border-primary hover:bg-primary/25": !internalError,
		}
	);
	const labelClass = clsx("", {
		"text-primary": !internalError,
		"text-background": !internalError && checked,
		"text-danger-foreground": internalError,
	});

	const checkboxBoxClass = clsx(
		"w-3 h-3 relative peer shrink-0 appearance-none border transition-all cursor-pointer",
		{
			"bg-background peer-checked:border-success-foreground border-success-foreground peer-checked:bg-success-foreground":
				!internalError && checked,
			"peer-checked:bg-danger-foreground accent-danger-background bg-danger-foreground peer-checked:border-danger-background":
				internalError,
		}
	);

	const svgClass = clsx(
		"absolute w-3 h-3 hidden fill-none peer-checked:block",
		{
			"peer-checked:stroke-primary": !internalError && checked,
		}
	);

	return (
		<div className="flex flex-col mb-2 w-full">
			<label htmlFor={name} className={checkboxClass}>
				<input
					type="checkbox"
					id={id}
					name={name}
					checked={checked}
					onChange={handleChange}
					onBlur={onBlur}
					required={required}
					className={checkboxBoxClass}
				/>
				<svg
					className={svgClass}
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
				{internalError ? (
					<p className="text-danger-foreground">{errorMsg}</p>
				) : (
					<span className={labelClass}>{label}</span>
				)}
			</label>
		</div>
	);
};

export default CustomCheckbox;
