import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import vercel from "vite-plugin-vercel";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react(), vercel()],
	base: "/",
	build: {
		outDir: "dist",
		emptyOutDir: true,
		copyPublicDir: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
