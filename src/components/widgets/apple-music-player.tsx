import React from "react";

const AppleMusicPlayer: React.FC = () => {
	return (
		<iframe
			height="450"
			width="100%"
			title="Media player"
			src=""
			id="embedPlayer"
			style={{
				border: "0px",
				borderRadius: "12px",
				width: "100%",
				height: "450px",
				maxWidth: "660px",
			}}
			sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
			allow="autoplay *; encrypted-media *; clipboard-write"
		/>
	);
};

export { AppleMusicPlayer };
