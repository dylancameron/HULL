import React, { useState, useRef } from "react";
import { ModalContext } from "@/hooks/use-modal";
import { AnimatePresence, motion } from "motion/react";

interface ModalProviderProps {
	children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const handleOpenModal = (content: React.ReactNode) => {
		setModalContent(content);
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
		setModalContent(null);
	};
	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			handleCloseModal();
		}
	};

	const modalContextValue = {
		isModalOpen,
		onOpen: handleOpenModal,
		onClose: handleCloseModal,
		onToggle: () => setIsModalOpen((prev) => !prev),
	};

	return (
		<ModalContext.Provider value={modalContextValue}>
			{children}
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						className="fixed inset-0 flex items-center md:items-end justify-center bg-black/75 z-0"
						onClick={handleBackdropClick}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 50 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
							}}
							ref={modalRef}
							className="relative z-50"
							onClick={(e) => e.stopPropagation()}
						>
							{modalContent}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</ModalContext.Provider>
	);
};
