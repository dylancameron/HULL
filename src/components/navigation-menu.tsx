import React, { useRef } from "react";
// import { NewsletterForm } from "./widgets/newsletter-widget";
import BandsintownWidget from "./widgets/bandsintown-widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faSpotify,
	faYoutube,
	faBandcamp,
} from "@awesome.me/kit-cbb97b3f25/icons/classic/brands";
import { useModalContext } from "@/hooks/use-modal";
import pocomania from "/pocomania.png";

interface HeaderProps {
	openModal?: () => void;
}

const headerLinks = [
	// { key: "newsletter", label: "Sign Up" },
	{ key: "tour", label: "Tour" },
	{
		key: "listen",
		label: "Listen",
		href: "https://isaiahhull.y-r.co/pocomania",
		external: true,
	},
];

const socialLinks = [
	{
		icon: faInstagram,
		href: "https://www.instagram.com/isaiahull/",
		label: "Instagram",
	},
	{
		icon: faYoutube,
		href: "https://www.youtube.com/@isaiahhull/videos",
		label: "YouTube",
	},
	{
		icon: faSpotify,
		href: "https://open.spotify.com/artist/2kRhgCgYazkIoYDFgGtXoq?si=H9FrQTSIQ2yNROtHWgzPdA",
		label: "Spotify",
	},
	{
		icon: faBandcamp,
		href: "https://isaiahhull.bandcamp.com",
		label: "Bandcamp",
	},
];

const CustomHeader: React.FC<HeaderProps> = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const { onOpen } = useModalContext();

	const linkClass =
		"text-white uppercase hover:text-primary text-shadow-xs text-shadow-black md:text-2xl text-sm";

	// const handleOpenNewsletterModal = () => {
	// 	onOpen(<NewsletterForm />);
	// };

	const handleOpenTourWidget = () => {
		onOpen(<BandsintownWidget />);
	};

	const renderLink = ({
		key,
		label,
		href,
		external,
	}: (typeof headerLinks)[number]) => {
		if (key === "newsletter") {
			return (
				<button
					key={key}
					type="button"
					// onClick={handleOpenNewsletterModal}
					className={linkClass}
					aria-label={label}
				>
					{label}
				</button>
			);
		}

		if (key === "tour") {
			return (
				<button
					key={key}
					type="button"
					onClick={handleOpenTourWidget}
					className={linkClass}
					aria-label={label}
				>
					{label}
				</button>
			);
		}

		return (
			<a
				key={key}
				href={href}
				target={external ? "_blank" : undefined}
				rel={external ? "noopener noreferrer" : undefined}
				className={linkClass}
				aria-label={label}
			>
				{label}
			</a>
		);
	};

	return (
		<header
			data-header
			ref={headerRef}
			className="fixed z-10 left-0 right-0 flex items-center justify-center pointer-events-none top-0 md:px-6 md:py-4 p-2"
		>
			<div className="flex w-full justify-between md:items-center items-start">
				{/* Logo or Brand Name */}
				<a href="/" className="pointer-events-auto">
					<img src={pocomania} alt="Logo" className="h-6 md:h-10" />
				</a>

				{/* Navigation Links */}
				<nav className="pointer-events-auto w-full md:px-0 flex flex-col items-end md:items-center md:flex-row justify-end gap-0 md:gap-10 text-lg md:text-3xl">
					<div className="flex items-end md:items-center flex-col md:flex-row gap-0 md:gap-8">
						{headerLinks.map(renderLink)}
					</div>

					{/* Desktop social icons */}
					<div className="hidden md:flex items-center gap-4 h-full justify-end">
						{socialLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								title={link.label}
								aria-label={link.label}
								className="text-white text-2xl hover:text-primary drop-shadow-xs drop-shadow-black"
							>
								<FontAwesomeIcon icon={link.icon} />
								<span className="sr-only">{link.label}</span>
							</a>
						))}
					</div>
				</nav>
			</div>

			{/* Mobile social icons pinned to bottom */}
			<div className="flex md:hidden fixed right-2 bottom-2 mx-auto justify-end items-center gap-4 z-[999] pointer-events-auto">
				{socialLinks.map((link, index) => (
					<a
						key={index}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						title={link.label}
						aria-label={link.label}
						className="text-white text-md hover:text-primary drop-shadow-xs drop-shadow-black"
					>
						<FontAwesomeIcon icon={link.icon} />
						<span className="sr-only">{link.label}</span>
					</a>
				))}
			</div>
		</header>
	);
};

export default CustomHeader;
