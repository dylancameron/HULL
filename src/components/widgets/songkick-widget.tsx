import { useExternalScripts } from "@/hooks/use-external-scripts";
import { CustomButton } from "@/components/custom-button";
import { faXmark } from "@awesome.me/kit-cbb97b3f25/icons/duotone/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModalContext } from "@/hooks/use-modal";

export default function SongkickWidget() {
	const { onClose } = useModalContext();
	useExternalScripts({ url: "https://widget.songkick.com/widget.js" });

	return (
		<>
			<div className="w-full rounded-2xl mx-auto relative h-full md:h-auto overflow-y-scroll bg-black/75 p-2 md:p-4 backdrop-blur-sm">
				<div className="flex items-center justify-end">
					<CustomButton
						variant="bordered"
						size="xs"
						onPress={onClose}
						isIconOnly
					>
						<FontAwesomeIcon icon={faXmark} />
					</CustomButton>
				</div>
				<a
					title="Songkick Widget"
					href=""
					className="songkick-widget"
					data-theme="dark"
					data-track-button="on"
					data-detect-style="on"
					data-locale="en"
					data-other-artists="on"
					data-share-button="on"
					data-country-filter="on"
					data-rsvp="on"
					data-request-show="on"
					data-past-events="off"
					data-past-events-offtour="off"
					data-remind-me="off"
					style={{ display: "none" }}
				></a>
			</div>
		</>
	);
}
