import React from "react";
import fallbackImg from "@/assets/svg/yt.svg";

interface DigitalPackshotStyleConfig {
	fontFamily?: string;
	titleColor?: string;
	subtitleColor?: string;
	backgroundColor?: string;
	buttonClassName?: string;
}

type DigitalPackshotType = {
	className?: string;
	showTitleButton?: boolean;
	href: string;
	imgSrc?: string;
	title?: string;
	subtitle?: string;
	imgAlt?: string;
	children?: React.ReactNode;
	styleConfig?: DigitalPackshotStyleConfig;
};

interface DigitalPackshotProps {
	cards: DigitalPackshotType[];
	className?: string;
	defaultStyleConfig?: DigitalPackshotStyleConfig;
}

const DigitalPackshot: React.FC<DigitalPackshotProps> = ({
	cards,
	className,
	defaultStyleConfig,
}) => {
	const isGrid = cards.length > 1;

	return (
		<div className={`w-full h-auto relative ${className}`}>
			<div
				className={
					isGrid
						? "grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2"
						: "flex flex-col"
				}
			>
				{cards.map((card, index) => (
					<div key={index} className="relative w-full aspect-square">
						<DigitalPackshotCard
							{...card}
							styleConfig={card.styleConfig || defaultStyleConfig}
						>
							{card.children}
						</DigitalPackshotCard>
					</div>
				))}
			</div>
		</div>
	);
};

const DigitalPackshotCard: React.FC<DigitalPackshotType> = ({
	href,
	imgSrc = fallbackImg,
	title,
	subtitle,
	imgAlt,
	showTitleButton = false,
	children,
	styleConfig = {},
}) => {
	const {
		fontFamily = "font-sans",
		titleColor = "text-foreground",
		subtitleColor = "text-foreground/50",
		backgroundColor = "bg-background",
		buttonClassName = "",
	} = styleConfig;

	return (
		<div className="relative w-full aspect-square">
			<a
				target="_blank"
				rel="noopener"
				title={title}
				href={href}
				className="absolute inset-0 z-10"
			/>

			{!children && (
				<img
					src={imgSrc}
					alt={imgAlt || "Digital Packshot"}
					className="w-full h-full object-contain"
				/>
			)}
			{showTitleButton && (
				<div
					className={`absolute top-2 right-2 text-xs ${backgroundColor} ${buttonClassName}`}
				>
					<div
						className={`font-bold uppercase ${fontFamily} ${titleColor}`}
					>
						{title || "Title"}
					</div>
					<div className={`uppercase ${fontFamily} ${subtitleColor}`}>
						{subtitle || "Subtitle"}
					</div>
				</div>
			)}
			{children && <div className="w-auto">{children}</div>}
		</div>
	);
};

export default DigitalPackshot;
