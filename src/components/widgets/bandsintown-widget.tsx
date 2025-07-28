import { useExternalScripts } from "@/hooks/use-external-scripts";
import { CustomButton } from "@/components/custom-button";
import { faXmark } from "@awesome.me/kit-cbb97b3f25/icons/duotone/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModalContext } from "@/hooks/use-modal";

export default function BandsintownWidget() {
	const { onClose } = useModalContext();
	useExternalScripts({ url: "https://widgetv3.bandsintown.com/main.min.js" });

	return (
		<>
			<div className="w-screen flex-grow text-white mx-auto bg-black/75 p-2 md:p-4 backdrop-blur-sm relative h-screen md:h-auto overflow-y-auto">
				<div className="flex items-center justify-between p-2 mt-12 md:mt-0">
					<h2 className="text-sm uppercase px-2">Tour Dates</h2>
					<CustomButton
						variant="bordered"
						size="xs"
						onPress={onClose}
						isIconOnly
					>
						<FontAwesomeIcon icon={faXmark} />
					</CustomButton>
				</div>
				{/* 15594819-isaiah-hull */}
				<a
					className="bit-widget-initializer"
					data-artist-name="id_15594819"
					data-background-color="rgba(0,0,0,0.5)"
					data-separator-color="rgba(255,255,255,0.5)"
					data-text-color="rgba(255,255,255,1)"
					data-font="Helvetica"
					data-auto-style="true"
					data-button-label-capitalization="uppercase"
					data-header-capitalization="uppercase"
					data-location-capitalization="capitalize"
					data-venue-capitalization="capitalize"
					data-display-local-dates="false"
					data-local-dates-position="tab"
					data-display-past-dates="false"
					data-display-details="false"
					data-display-lineup="false"
					data-display-start-time="false"
					data-social-share-icon="true"
					data-display-limit="all"
					data-date-format="MMMM, D, YYYY"
					data-date-orientation="horizontal"
					data-date-border-color="#4A4A4A"
					data-date-border-width="1px"
					data-date-capitalization="uppercase"
					data-date-border-radius=""
					data-event-ticket-cta-size="small"
					data-event-custom-ticket-text=""
					data-event-ticket-text="TICKETS"
					data-event-ticket-icon="false"
					data-event-ticket-cta-text-color="rgba(255,255,255,1)"
					data-event-ticket-cta-bg-color="rgba(74,74,74,0)"
					data-event-ticket-cta-border-color="rgba(255,255,255,1)"
					data-event-ticket-cta-border-width="1px"
					data-event-ticket-cta-border-radius="0px"
					data-sold-out-button-text-color="rgba(255,255,255,0.52)"
					data-sold-out-button-background-color="rgba(74,74,74,0)"
					data-sold-out-button-border-color="rgba(255,255,255,0.51)"
					data-sold-out-button-clickable="true"
					data-event-rsvp-position="left"
					data-event-rsvp-cta-size="small"
					data-event-rsvp-only-show-icon="false"
					data-event-rsvp-text="RSVP"
					data-event-rsvp-icon="false"
					data-event-rsvp-cta-text-color="rgba(255,255,255,1)"
					data-event-rsvp-cta-bg-color="rgba(255,255,255,0)"
					data-event-rsvp-cta-border-color="rgba(255,255,255,1)"
					data-event-rsvp-cta-border-width="1px"
					data-event-rsvp-cta-border-radius="0px"
					data-follow-section-position="hidden"
					data-follow-section-alignment="center"
					data-follow-section-header-text="Get updates on new shows, new music, and more"
					data-follow-section-cta-size="medium"
					data-follow-section-cta-text="FOLLOW"
					data-follow-section-cta-icon="false"
					data-follow-section-cta-text-color="rgba(255,255,255,1)"
					data-follow-section-cta-bg-color="rgba(74,74,74,1)"
					data-follow-section-cta-border-color="rgba(74,74,74,1)"
					data-follow-section-cta-border-width="0px"
					data-follow-section-cta-border-radius="0px"
					data-play-my-city-position="hidden"
					data-play-my-city-alignment="center"
					data-play-my-city-header-text="Don't see a show near you?"
					data-play-my-city-cta-size="medium"
					data-play-my-city-cta-text="REQUEST A SHOW"
					data-play-my-city-cta-icon="false"
					data-play-my-city-cta-text-color="rgba(255,255,255,1)"
					data-play-my-city-cta-bg-color="rgba(74,74,74,1)"
					data-play-my-city-cta-border-color="rgba(74,74,74,1)"
					data-play-my-city-cta-border-width="0px"
					data-play-my-city-cta-border-radius="0px"
					data-optin-font=""
					data-optin-text-color=""
					data-optin-bg-color=""
					data-optin-cta-text-color=""
					data-optin-cta-bg-color=""
					data-optin-cta-border-width=""
					data-optin-cta-border-radius=""
					data-optin-cta-border-color=""
					data-language="en"
					data-layout-breakpoint="414"
					data-bit-logo-position="hidden"
					data-bit-logo-color="rgba(255,255,255,1)"
				></a>
			</div>
		</>
	);
}
