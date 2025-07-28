import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tailwindcss(),
		react(),
		createHtmlPlugin({
			template: "index.template.html",
			entry: "src/main.tsx",
			minify: true,
		}),
	],
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
