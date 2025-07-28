import React from "react";

interface SectionWrapperProps {
	id: string;
	children: React.ReactNode;
	maxed?: boolean;
	className?: string;
}

const Section: React.FC<SectionWrapperProps> = ({
	id,
	children,
	maxed = false,
	className,
}) => {
	return (
		<section
			id={id}
			className={`mx-auto w-full ${
				maxed ? "max-h-svh h-svh overflow-clip" : "min-w-svw h-auto"
			}`}
		>
			{maxed ? (
				<>{children}</>
			) : (
				<div className="flex items-center justify-center w-auto mx-auto h-auto px-4">
					<div className={className}>{children}</div>
				</div>
			)}
		</section>
	);
};

Section.displayName = "Section";
export default Section;
