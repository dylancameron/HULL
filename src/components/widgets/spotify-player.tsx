const SpotifyPlayer = () => {
	return (
		<iframe
			title="Spotify Player"
			data-testid="embed-iframe"
			style={{ borderRadius: "12px" }}
			src="https://open.spotify.com/embed/album/7pVXUYmXWNO6iqJR9hEtpb?utm_source=generator&theme=0"
			width="100%"
			height="352"
			frameBorder="0"
			allow-fullscreen=""
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
	);
};

export default SpotifyPlayer;
