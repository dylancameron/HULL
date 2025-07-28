export const slideRotateVariants = {
	enter: (direction: number) => ({
		x: direction > 0 ? -300 : 300,
		opacity: 0,
		rotate: direction > 0 ? -4 : 4, // Adds a slight rotation
		scale: 0.95,
	}),
	center: {
		x: 0,
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 30,
		},
	},
	exit: (direction: number) => ({
		x: direction < 0 ? 300 : -300,
		opacity: 0,
		scale: 0.95,
		rotate: direction < 0 ? 4 : -4,
	}),
};

export const mobileMenuVariant = {
	opened: {
		x: "0%",
		transition: {
			delay: 0.05,
			duration: 0.75,
			// ease: [0.75, 0, 0.19, 1.02],
			ease: "easeInOut" as const,
		},
	},
	closed: {
		x: "100%",
		transition: {
			delay: 0.35,
			duration: 0.25,
			// ease: [0.75, 0, 0.19, 1.02],
			ease: "easeInOut" as const,
		},
	},
};

export const hideNavItemsVariant = {
	opened: {
		opacity: 0,
		y: "-100%",
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
	closed: {
		opacity: 1,
		y: "0%",
		transition: {
			delay: 1.1,
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

export const pageTransitionVariants = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 20,
		},
	},
	exit: {
		opacity: 0,
		y: 50,
	},
};

export const containerVariants = {
	start: {
		translateY: 0,
		scale: 1,
	},
	hover: {
		translateY: -5,
		scale: 1,
		transition: {
			type: "spring" as const,
			stiffness: 200,
			damping: 10,
		},
	},
	tap: {
		translateY: 5,
		scale: 0.95,
		transition: {
			type: "spring" as const,
			stiffness: 200,
			damping: 10,
		},
	},
};

export const modalVariants = {
	initial: {
		opacity: 0,
		y: -10,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 30,
		},
	},
	exit: {
		opacity: 0,
		y: -10,
	},
};

export const navItemVariants = {
	hidden: {
		opacity: 0,
		y: 10,
		transition: {
			type: "spring" as const,
			stiffness: 200,
			damping: 20,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut" as const, // Add ease-out easing function
		},
	},
	exit: {
		opacity: 0,
		y: -10,
		transition: {
			duration: 0.1,
			ease: "easeOut" as const, // Add ease-out easing function
		},
	},
};

export const menuVariants = {
	hidden: {
		y: 100,
		opacity: 0,
		transition: {
			staggerChildren: 0.1,
			when: "afterChildren" as const,
		},
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.3,
		},
	},
	exit: {
		opacity: 0,
		y: 20,
		transition: {
			duration: 0.4,
			// staggerChildren: 0.1,
			when: "afterChildren" as const,
		},
	},
};

export const buttonVariants = {
	tap: {
		scale: 0.95,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 20,
		},
	},
	hover: {
		scale: 1,
		transition: {
			type: "spring" as const,
			stiffness: 200,
			damping: 15,
		},
	},
};

export const navIconVariants = {
	hidden: {
		opacity: 0,
		y: 10,
		transition: {
			staggerChildren: 0.1,
			when: "afterChildren" as const,
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1,
			type: "spring" as const,
			stiffness: 120,
			damping: 12,
		},
	},
	exit: {
		opacity: 0,
		y: 10,
		transition: {
			staggerChildren: 0.1,
			when: "afterChildren" as const,
		},
	},
};

export const navLinksVariants = {
	hidden: {
		y: 10,
		opacity: 0,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			stiffness: 120,
			damping: 12,
		},
	},
	exit: {
		opacity: 0,
		y: -10,
	},
};

export const menuGrowVariants = {
	opened: {
		opacity: 1,
		transition: {
			delay: 1.2,
		},
	},
	closed: {
		opacity: 0,
	},
};

export const staggerContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
			staggerDirection: -1,
		},
	},
	exit: {
		opacity: 0,
	},
};

export const elasticTransition = {
	type: "spring" as const,
	stiffness: 500,
	damping: 50,
	mass: 1,
	ease: [0.6, -0.05, 0.01, 0.99],
};

export const fadeScaleVariants = {
	initial: { opacity: 0, scale: 0.8 },
	center: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 20,
		},
	},
	exit: { opacity: 0, scale: 0.8 },
};

export const landerVariants = {
	initial: {
		opacity: 0,
		y: 50,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 30,
		},
	},
	exit: {
		opacity: 0,
		y: -50,
		transition: {
			duration: 0.2,
			ease: "easeInOut" as const,
		},
	},
};

export const motionConfig = {
	spring: {
		type: "spring" as const,
		stiffness: 200,
		damping: 10,
	},
	bounce: {
		type: "spring" as const,
		stiffness: 300,
		damping: 15,
		bounce: 0.3,
	},
	elastic: {
		type: "spring",
		stiffness: 500,
		damping: 50,
		mass: 1,
		ease: [0.6, -0.05, 0.01, 0.99],
	},
	hoverEffect: {
		scale: 1.1,
		transition: { duration: 0.3, ease: "easeInOut" as const },
	},
	tapEffect: {
		scale: 0.9,
		transition: { duration: 0.2, ease: "easeOut" as const },
	},
	fadeScale: {
		opacity: [0, 1],
		scale: [0.8, 1],
		transition: { duration: 0.5, ease: "easeInOut" as const },
	},
	rotateEffect: {
		rotate: [0, 10, -10, 0],
		transition: { duration: 0.6, type: "spring" as const },
	},
};

export const bounceVariants = {
	initial: (custom: number) => ({
		x: custom > 0 ? -100 : 100,
		opacity: 0,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 15,
			bounce: 0.25,
		},
	}),
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring" as const,
			stiffness: 300,
			damping: 20,
			bounce: 0.3,
		},
	},
	exit: (custom: number) => ({
		x: custom < 0 ? 100 : -100,
		opacity: 0,
		transition: {
			type: "spring" as const,
			stiffness: 200,
			damping: 10,
			bounce: 0.2,
		},
	}),
};

export const variantsCurrentSlide = {
	animate: { opacity: 1, x: 0 },
	exit: {
		opacity: 0,
		x: 100,
		transition: { duration: 0.2 },
	},
};

export const variantsNextSlide = {
	initial: { opacity: 0, x: 100 },
	animate: { opacity: 1, x: 0 },
};

export const swipeVariants = {
	initial: (direction: number) => {
		return {
			x: direction > 0 ? -100 : 100,
			opacity: 0,
			transition: {
				type: "spring" as const,
				stiffness: 300,
				damping: 20,
			},
		};
	},
	animate: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			x: direction < 0 ? 100 : -100,
			opacity: 0,
		};
	},
};

export const zoomVariants = {
	initial: { scale: 0.8, opacity: 0 },
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring" as const,
			stiffness: 260,
			damping: 20,
		},
	},
	exit: { scale: 0.8, opacity: 0 },
};

export const flipVariants = {
	initial: { rotateY: 90, opacity: 0 },
	animate: {
		rotateY: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: [0.6, 0.01, -0.05, 0.95],
		},
	},
	exit: { rotateY: -90, opacity: 0 },
};

export const pulseVariants = {
	animate: {
		scale: [1, 1.05, 1],
		transition: {
			duration: 1.5,
			repeat: Infinity,
			ease: "easeInOut" as const,
		},
	},
};

export const floatVariants = {
	animate: {
		y: [0, -5, 0],
		transition: {
			duration: 2,
			repeat: Infinity,
			ease: "easeInOut" as const,
		},
	},
};

export const revealLeftVariants = {
	initial: { x: 50, opacity: 0.5 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			x: {
				type: "spring" as const,
				stiffness: 300,
				damping: 30,
				delay: 0.15,
			},
			opacity: {
				type: "tween" as const,
				duration: 0.1,
			},
		},
	},
	exit: { x: -50, opacity: 0 },
};

export const revealRightVariants = {
	initial: { x: -50, opacity: 0.5 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			x: {
				type: "spring" as const,
				stiffness: 300,
				damping: 30,
				delay: 0.15,
			},
			opacity: {
				duration: 0.1,
			},
		},
	},
	exit: { x: 50, opacity: 0 },
};

export const popFadeVariants = {
	initial: { opacity: 0, scale: 0.95 },
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.25,
			ease: "easeInOut" as const,
		},
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		transition: {
			duration: 0.2,
			ease: "easeIn" as const,
		},
	},
};
