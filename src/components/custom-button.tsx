"use client";
import React, {
	forwardRef,
	useRef,
	useState,
	useEffect,
	type ButtonHTMLAttributes,
	type MouseEvent,
} from "react";
import clsx from "clsx";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "./ui/spinner";

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
	variant?:
		| "default"
		| "brutalist"
		| "ghost"
		| "bordered"
		| "solid"
		| "branded"
		| "menu_item";
	color?:
		| "default"
		| "primary"
		| "secondary"
		| "danger"
		| "success"
		| "warning"
		| "info"
		| "disabled"
		| "custom";
	size?: "xs" | "sm" | "md" | "lg";
	isLoading?: boolean;
	startContent?: IconDefinition | React.ReactNode;
	endContent?: IconDefinition | React.ReactNode;
	fullWidth?: boolean;
	isIconOnly?: boolean;
	disableRipple?: boolean;
	customSlot?: React.ReactNode;
	onPress?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const sizeClasses = {
	xs: "px-2 py-1 text-xs h-6",
	sm: `px-3 py-1.5 text-sm h-8`,
	md: "px-4 py-2 text-base h-10",
	lg: "px-5 py-2.5 text-lg h-12",
};

const iconOnlySize = {
	xs: "w-6 h-6 aspect-square rounded-full", // Tailwind 1.5rem
	sm: "w-8 h-8 aspect-square rounded-full", // 2rem
	md: "w-10 h-10 aspect-square rounded-full", // 2.5rem
	lg: "w-12 h-12 aspect-square rounded-full", // 3rem
};

const getColorVars = (color: ButtonProps["color"]) => {
	switch (color) {
		case "default":
			return {
				bg: "bg-background",
				border: "border-text/10",
				fgText: "text-text",
				fgHover: "hover:bg-text/10",
				rawText: "text-primary",
				hoverTint: "hover:bg-primary/50",
			};
		case "secondary":
			return {
				bg: "bg-secondary",
				border: "border-secondary",
				fgText: "text-secondary-foreground",
				fgHover: "hover:bg-secondary/80",
				rawText: "text-secondary",
				hoverTint: "hover:bg-secondary/10",
			};
		case "success":
			return {
				bg: "bg-success",
				border: "border-success",
				fgText: "text-success-foreground",
				fgHover: "hover:bg-success/80",
				rawText: "text-success",
				hoverTint: "hover:bg-success/10",
			};
		case "danger":
			return {
				bg: "bg-danger",
				border: "border-danger-foreground",
				fgText: "text-danger-foreground",
				fgHover: "hover:bg-danger/80",
				rawText: "text-danger-foreground",
				hoverTint: "hover:bg-danger-foreground/50",
			};
		case "info":
			return {
				bg: "bg-info-background",
				border: "border-info-foreground",
				fgText: "text-info-foreground",
				fgHover: "hover:bg-info/80",
				rawText: "text-info-foreground",
				hoverTint: "hover:bg-info-foreground/50",
			};
		case "warning":
			return {
				bg: "bg-warning",
				border: "border-warning",
				fgText: "text-warning-foreground",
				fgHover: "hover:bg-warning/80",
				rawText: "text-warning",
				hoverTint: "hover:bg-warning/10",
			};
		case "custom":
			return {
				bg: "",
				border: "",
				fgText: "",
				fgHover: "",
				rawText: "",
				hoverTint: "",
			};
		case "disabled":
			return {
				bg: "bg-neutral-400",
				border: "border-neutral-400",
				fgText: "text-white",
				fgHover: "",
				rawText: "text-neutral-400",
				hoverTint: "",
			};
		case "primary":
		default:
			return {
				bg: "bg-primary",
				border: "border-primary",
				fgText: "text-button-text",
				fgHover: "hover:bg-primary/80",
				rawText: "text-primary",
				hoverTint: "hover:bg-primary/50",
			};
	}
};

export const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			variant = "default",
			color = "primary",
			size = "md",
			isLoading = false,
			startContent,
			endContent,
			fullWidth = false,
			isIconOnly = false,
			disableRipple = false,
			className,
			onPress,
			customSlot,
			...props
		},
		ref
	) => {
		const [ripples, setRipples] = useState<
			{ x: number; y: number; id: number }[]
		>([]);
		const rippleId = useRef(0);
		const buttonRef = useRef<HTMLButtonElement | null>(null);

		const isIconDefinition = (
			icon: IconDefinition | React.ReactNode | undefined
		): icon is IconDefinition =>
			typeof icon === "object" &&
			icon !== null &&
			"iconName" in icon &&
			"prefix" in icon;

		const startContentIcon = (
			<>
				{isIconDefinition(startContent) ? (
					<FontAwesomeIcon icon={startContent} className="w-4 h-4" />
				) : (
					startContent
				)}
			</>
		);

		const endContentIcon = (
			<>
				{isIconDefinition(endContent) ? (
					<FontAwesomeIcon icon={endContent} className="w-4 h-4" />
				) : isLoading ? (
					<Spinner size="small" />
				) : (
					endContent
				)}
			</>
		);

		const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
			if (!disableRipple && buttonRef.current) {
				const rect = buttonRef.current.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const id = rippleId.current++;
				setRipples((r) => [...r, { x, y, id }]);
			}
			if (typeof onPress === "function") {
				onPress(e);
			}
		};

		useEffect(() => {
			if (ripples.length === 0) return;
			const timer = setTimeout(() => setRipples([]), 400);
			return () => clearTimeout(timer);
		}, [ripples]);

		const { bg, fgText, fgHover, hoverTint, rawText, border } =
			getColorVars(color);

		const variantStyles =
			clsx(
				{
					default: `${bg} ${fgText} border ${border} ${fgHover} ${hoverTint}`,
					solid: `${bg} ${fgText} ${fgHover}`,
					glow: `${bg} ${fgText} border ${border} shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:brightness-110`,
					brutalist: `bg-black text-white border border-white hover:bg-white hover:text-black`,
					bordered: `bg-transparent border ${border} ${rawText} ${hoverTint}`,
					ghost: `bg-transparent ${rawText} ${hoverTint}`,
					branded: ``,
					menu_item: ``,
				}[variant]
			) || "";

		return (
			<>
				<style>
					{`
						@keyframes ripple {
							0% { transform: scale(0); opacity: 0.5; }
							100% { transform: scale(2.5); opacity: 0; }
						}
					`}
				</style>
				<button
					ref={(node) => {
						buttonRef.current = node;
						if (typeof ref === "function") ref(node);
						else if (ref && node)
							(
								ref as React.RefObject<HTMLButtonElement>
							).current = node;
					}}
					disabled={
						props.disabled || color === "disabled" || isLoading
					}
					onClick={handleClick}
					className={clsx(
						"relative overflow-hidden inline-flex items-center gap-2 justify-center transition-all duration-150 ease focus:outline-none cursor-pointer",
						variantStyles,
						sizeClasses[size],
						fullWidth && "w-full",
						isIconOnly ? iconOnlySize[size] : sizeClasses[size],
						isLoading && "opacity-80",
						className
					)}
					{...props}
				>
					{customSlot ? (
						customSlot
					) : (
						<>
							{/* Start Content */}
							{startContentIcon}

							{isLoading && (
								<span className="w-4 h-4 rounded-full border border-t-transparent border-primary animate-spin mr-2" />
							)}
							{!isLoading && children}

							{endContentIcon}
						</>
					)}

					{/* Ripple */}
					{!disableRipple && (
						<span className="absolute inset-0 pointer-events-none">
							{ripples.map(({ x, y, id }) => (
								<span
									key={id}
									className="absolute w-20 h-20 bg-white/30 rounded-full"
									style={{
										top: y - 40,
										left: x - 40,
										animation: "ripple 0.4s linear",
									}}
								/>
							))}
						</span>
					)}
				</button>
			</>
		);
	}
);

CustomButton.displayName = "CustomButton";
