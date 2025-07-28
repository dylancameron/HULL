type BaseNavItem = {
	title: string;
	className?: string;
	onClick?: () => void;
};

type RouteNavItem = BaseNavItem & {
	type: "route";
	href: string;
};

type LinkNavItem = BaseNavItem & {
	type: "link";
	href: string;
};

type ButtonNavItem = BaseNavItem & {
	type: "button";
	href?: undefined;
};

export type NavItemType = RouteNavItem | LinkNavItem | ButtonNavItem;
export type SocialLinkType = NavItemType & { icon: string };
