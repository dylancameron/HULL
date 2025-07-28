import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type PackshotType = {
	kind: "card" | "packshot";
	id: string;
	title: string;
	subtitle?: string;
	description?: string;
	href: string;
	imgSrc?: string;
	images?: { imgSrc: string; alt: string }[];

	showTitleButton?: boolean;
	className?: string;
	imgAlt?: string;
};

export interface ContentProps {
	id: string;
	mode?: "section" | "page";
	className?: string;
	maxed?: boolean;
}

export interface CtaType {
	href: string;
	label: string;
	type?: "route" | "external";
	icon?: IconDefinition;
	leftIcon?: boolean;
	rightIcon?: boolean;
	children?: React.ReactNode;
}

export type ImageType = {
	src: string;
	alt: string;
};

// Slider component types and interfaces
export interface SlideType {
	type: "video" | "card";
	videoId?: string;
	label?: string;

	// Card fields
	id?: string;
	images?: ImageType[];
	title?: string;
	subtitle?: string;
	buttonTitle?: string;
	buttonLabel?: string;
	description?: string;
	cta?: CardCTAType | CardCTAType[];
	children?: React.ReactNode;
}

// UI components types and interfaces
export type CardType = {
	id?: string;
	images?: ImageType[];
	title?: string;
	subtitle?: string;
	imgAlt?: string;
	description?: string;
	cta?: CardCTAType | CardCTAType[];
	children?: React.ReactNode;
	className?: string;
};

export type CardCTAType =
	| {
			type: "route";
			href: string;
			label: string;
			icon?: IconDefinition;
			children?: React.ReactNode;
			leftIcon?: boolean;
			rightIcon?: boolean;
	  }
	| {
			type: "external";
			href: string;
			label: string;
			icon?: IconDefinition;
			children?: React.ReactNode;
			leftIcon?: boolean;
			rightIcon?: boolean;
			target?: "_blank" | "_self";
	  };
