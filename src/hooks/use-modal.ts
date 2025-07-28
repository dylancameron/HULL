import { createContext, useContext } from "react";

interface ModalContextType {
	isModalOpen: boolean;
	onOpen: (content: React.ReactNode) => void;
	onClose: () => void;
	onToggle: () => void;
}

export const ModalContext = createContext<ModalContextType>({
	isModalOpen: false,
	onOpen: () => {},
	onClose: () => {},
	onToggle: () => {},
});

export const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModalContext must be used within a ModalProvider");
	}
	return context;
};
