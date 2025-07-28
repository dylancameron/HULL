"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faInfoCircle,
	faTriangleExclamation,
	faExclamationSquare,
	faUser,
	faCheckDouble,
} from "@awesome.me/kit-cbb97b3f25/icons/duotone/solid";
import clsx from "clsx";

/**
 * Alert component to display different types of alerts.
 * @param {string} type - The type of alert (default, success, warning, danger, primary, secondary).
 * @param {string} [title] - The title of the alert.
 * @param {string} message - The message to display in the alert.
 * @param {string} [className] - Additional class names for styling.
 * @returns {JSX.Element} The Alert component.
 */

type AlertType =
	| "default"
	| "success"
	| "info"
	| "warning"
	| "danger"
	| "primary"
	| "secondary";

interface AlertProps {
	type: AlertType;
	title?: string;
	message: string;
	className?: string;
}

const CustomAlert: React.FC<AlertProps> = ({
	type,
	title,
	message,
	className = "",
}: AlertProps) => {
	const iconMap = {
		default: faInfoCircle,
		success: faCheck,
		warning: faTriangleExclamation,
		danger: faExclamationSquare,
		primary: faUser,
		info: faInfoCircle,
		secondary: faCheckDouble,
	};

	const iconColorMap = {
		default: "text-info-foreground",
		success: "text-success-foreground",
		warning: "text-warning-foreground",
		info: "text-info-foreground",
		danger: "text-danger-foreground",
		primary: "text-primary",
		secondary: "text-secondary-foreground",
	};

	const alertColorMap = {
		default:
			"bg-info-background text-info-foreground border-info-foreground",
		success:
			"bg-success-background text-success-foreground border-success-foreground",
		warning:
			"bg-warning-background text-warning-foreground border-warning-foreground",
		info: "bg-info-background text-info-foreground border-info-foreground",
		danger: "bg-transparent text-danger-foreground border-danger-foreground",
		primary: "bg-background text-primary border-primary",
		secondary:
			"bg-secondary-background text-secondary-foreground border-secondary-foreground",
	};

	const alertContainer = clsx(
		"flex items-start pr-4 pt-2 pl-2 pb-2 leading-none mb-0 text-xs sm:text-sm border",
		alertColorMap[type],
		className
	);

	return (
		<div className={`${alertContainer} ${className}`} role="alert">
			<FontAwesomeIcon
				icon={iconMap[type]}
				className={`mr-0 ${iconColorMap[type]}`}
				size="xl"
			/>
			<div className={`flex gap-1 ${className}`}>
				{type === "success" && (
					<span className="font-semibold">{title ? title : ""}</span>
				)}
				{type === "warning" && (
					<span className="font-semibold">{title ? title : ""}</span>
				)}
				{type === "danger" && (
					<span className="font-semibold">{title ? title : ""}</span>
				)}
				{type === "primary" && (
					<span className="font-semibold">{title}</span>
				)}
				{type === "info" && (
					<span className="font-semibold">{title ? title : ""}</span>
				)}
				{type === "secondary" && (
					<span className="font-semibold">{title}</span>
				)}
				{type === "default" && (
					<span className="font-semibold">{title ? title : ""}</span>
				)}{" "}
				{type !== "default" &&
					type !== "primary" &&
					type !== "secondary" && (
						<span className="font-semibold">{title}</span>
					)}
				<span className={`${alertColorMap[type]}`}>{message}</span>
			</div>
		</div>
	);
};

export default CustomAlert;
