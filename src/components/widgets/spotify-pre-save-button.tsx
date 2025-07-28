import { faSpotify } from "@awesome.me/kit-cbb97b3f25/icons/classic/brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SpotifyPreSaveButton() {
	return (
		<a href="/api/spotify/login" className="">
			<button type="button" className="">
				<FontAwesomeIcon icon={faSpotify} />
				<span>Pre-Save on Spotify</span>
			</button>
		</a>
	);
}
