import React, { useState } from "react";
import { NavbarContext } from "@/hooks/use-navbar-context";

interface NavbarProviderProps {
	children: React.ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
	const [navbarHeight, setNavbarHeight] = useState(0);

	const handleHeightChange = (height: number) => {
		setNavbarHeight(height);
	};

	return (
		<NavbarContext.Provider
			value={{ navbarHeight, onHeightChange: handleHeightChange }}
		>
			{children}
		</NavbarContext.Provider>
	);
};
