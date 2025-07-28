import {
	faInstagram,
	faFacebook,
	faSpotify,
	faApple,
	faYoutube,
	faBluesky,
	faThreads,
	faTiktok,
	faBandcamp,
	faDiscord,
	faTwitch,
	faTumblr,
	faGoogle,
	faXTwitter,
} from "@awesome.me/kit-cbb97b3f25/icons/classic/brands";
import { IconDefinition } from "@awesome.me/kit-cbb97b3f25/icons/classic/brands";

/**
 * This function resolves the brand name to its corresponding FontAwesome icon definition.
 * @param iconName - The name of the icon to resolve.
 * @returns The FontAwesome icon definition or undefined if the icon name is not found.
 */

const iconMap: Record<string, IconDefinition> = {
	faInstagram: faInstagram,
	faFacebook: faFacebook,
	faSpotify: faSpotify,
	faApple: faApple,
	faYoutube: faYoutube,
	faTiktok: faTiktok,
	faBluesky: faBluesky,
	faThreads: faThreads,
	faBandcamp: faBandcamp,
	faDiscord: faDiscord,
	faTwitch: faTwitch,
	faTumblr: faTumblr,
	faGoogle: faGoogle,
	faXTwitter: faXTwitter,
};

const iconResolver = (iconName?: string): IconDefinition | undefined => {
	return iconName ? iconMap[iconName] : undefined;
};

export { iconResolver };
export type { IconDefinition };
