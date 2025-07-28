import React from "react";

export interface PageComponentProps {
	id: string;
	className?: string;
	mode?: "page" | "section";
}

export type PageType = {
	id: string;
	component: React.FC<PageComponentProps>;
	section: React.FC<PageComponentProps>;
	href: string;
	title: string;
	hasPage?: boolean;
	type: "route" | "link" | "button";
};

export const pages: PageType[] = [
	// {
	// 	id: "home",
	// 	component: HomePage,
	// 	section: HomeSection,
	// 	href: "/",
	// 	title: "Home",
	// 	// hasPage: true,
	// 	type: "route",
	// },
	// {
	// 	id: "demo",
	// 	component: DemoPage,
	// 	section: DemoSection,
	// 	href: "/demo",
	// 	title: "Demo",
	// 	// hasPage: true,
	// 	type: "route",
	// },
	// {
	// 	id: "subscribe",
	// 	component: SubscribePage,
	// 	section: SubscribeSection,
	// 	href: "/subscribe",
	// 	title: "Subscribe",
	// 	// hasPage: true,
	// 	type: "route",
	// },
	// Add more pages as needed
];
