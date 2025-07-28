import { NavItemType, SocialLinkType } from "@/types/navigation-types";

export const navItems: NavItemType[] = [
	{
		type: "route",
		title: "Home",
		href: "/",
	},
	{
		type: "route",
		title: "Demo",
		href: "/demo",
	},
];

export const socialLinks: SocialLinkType[] = [
	{
		type: "link",
		title: "Instagram",
		href: "",
		icon: "faInstagram",
	},
	{
		type: "link",
		title: "YouTube",
		href: "",
		icon: "faYoutube",
	},
	{
		type: "link",
		title: "Twitter",
		href: "",
		icon: "faXTwitter",
	},
	{
		type: "link",
		title: "TikTok",
		href: "",
		icon: "faTiktok",
	},
	{
		type: "link",
		title: "Facebook",
		href: "",
		icon: "faFacebook",
	},
	{
		type: "link",
		title: "Spotify",
		href: "",
		icon: "faSpotify",
	},
	{
		type: "link",
		title: "Apple Music",
		href: "",
		icon: "faAppleMusic",
	},
];
