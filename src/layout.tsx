import React from "react";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { useNavbarContext } from "@/hooks/use-navbar-context";
import VimeoPlayer from "./components/vimeo-player";
import NavigationMenu from "./components/navigation-menu";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { navbarHeight } = useNavbarContext();

	return (
		<>
			<VimeoPlayer />
			<main className="w-full" style={{ paddingTop: navbarHeight }}>
				<NavigationMenu />
				<MotionWrapper>{children}</MotionWrapper>
			</main>
		</>
	);
};

export default Layout;
