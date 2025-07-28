import React from "react";
import { motion } from "motion/react";
import { pageTransitionVariants } from "@/config/motion";

interface MotionWrapperProps {
	children: React.ReactNode;
	className?: string;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
	children,
	className,
}) => {
	return (
		<motion.div
			variants={pageTransitionVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default MotionWrapper;
