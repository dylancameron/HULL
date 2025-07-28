import { useEffect, useRef } from "react";
import Player from "@vimeo/player";
import styles from "./vimeo-player.module.css";

const VIDEO_ID = 1103156186; // your single ID as a number

export default function VimeoPlayer() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		// SDK will inject a proper cover‑mode iframe here
		const player = new Player(containerRef.current, {
			id: VIDEO_ID,
			background: true, // ← object‑fit:cover internally
			loop: true,
			autoplay: true,
			muted: true,
			playsinline: true,
			autopause: false,
		});

		return () => {
			player.destroy().catch(() => {});
		};
	}, []);

	// no manual <iframe> needed—just give SDK a div to fill
	return <div ref={containerRef} className={styles.container} />;
}
