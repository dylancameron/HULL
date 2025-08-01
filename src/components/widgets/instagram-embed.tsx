import { useExternalScripts } from "@/hooks/use-external-scripts";

const InstagramEmbed = () => {
	useExternalScripts({ url: "https://www.instagram.com/embed.js" });
	return (
		<blockquote
			className="instagram-media"
			data-instgrm-permalink="https://www.instagram.com/isaiahull/"
			data-instgrm-version="14"
			style={{
				background: "#FFF",
				border: "0",
				borderRadius: "3px",
				boxShadow:
					"0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
				margin: "1px",
				maxWidth: "540px",
				minWidth: "326px",
				padding: "0",
				width: "99.375%",
			}}
		>
			<div style={{ padding: "16px" }}>
				<a
					title="Instagram"
					rel="noopener noreferrer"
					href="https://www.instagram.com/"
					style={{
						background: "#FFFFFF",
						lineHeight: "0",
						padding: "0 0",
						textAlign: "center",
						textDecoration: "none",
						width: "100%",
					}}
					target="_blank"
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<div
							style={{
								backgroundColor: "#F4F4F4",
								borderRadius: "50%",
								flexGrow: "0",
								height: "40px",
								marginRight: "14px",
								width: "40px",
							}}
						></div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								flexGrow: "1",
								justifyContent: "center",
							}}
						>
							<div
								style={{
									backgroundColor: "#F4F4F4",
									borderRadius: "4px",
									flexGrow: "0",
									height: "14px",
									marginBottom: "6px",
									width: "100px",
								}}
							></div>
							<div
								style={{
									backgroundColor: "#F4F4F4",
									borderRadius: "4px",
									flexGrow: "0",
									height: "14px",
									width: "60px",
								}}
							></div>
						</div>
					</div>
				</a>
			</div>
		</blockquote>
	);
};

export default InstagramEmbed;
