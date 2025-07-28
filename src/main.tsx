import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SPARouter from "./pages/router";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<SPARouter />
	</StrictMode>
);
