"use client";
import { useMemo } from "react";

const CircularTimer = ({
	elapsed,
	children,
	duration = 10,
}: {
	elapsed: number;
	duration?: number;
	children?: React.ReactNode;
}) => {
	const radius = 20;
	const stroke = 1;
	const normalizedRadius = radius - stroke * 2;
	const circumference = normalizedRadius * 2 * Math.PI;

	const progress = Math.min(elapsed / duration, 1);
	const strokeDashoffset = circumference - progress * circumference;

	const computedColor = useMemo(() => {
		if (progress < 0.5) {
			return "var(--color-success)";
		} else if (progress < 0.75) {
			return "var(--color-warning)";
		} else {
			return "var(--color-danger)";
		}
	}, [progress]);

	return (
		<div className="relative">
			<svg
				height={radius * 2}
				width={radius * 2}
				className="transform -rotate-90"
			>
				<circle
					stroke={computedColor}
					fill="transparent"
					strokeWidth={stroke}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
				<circle
					stroke="white"
					fill="transparent"
					strokeWidth={stroke}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
					strokeDasharray={circumference}
					strokeDashoffset={strokeDashoffset}
					style={{ transition: "stroke-dashoffset 0.1s linear" }}
				/>
			</svg>
			<div className="absolute inset-0 flex items-center justify-center">
				{children}
			</div>
		</div>
	);
};

export default CircularTimer;
