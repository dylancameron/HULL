import { Link } from "wouter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@awesome.me/kit-cbb97b3f25/icons/duotone/solid";

export default function NotFoundPage() {
	return (
		<div className="fixed z-0 inset-0 flex items-center justify-center pointer-events-none">
			<div className="absolute inset-0 flex items-center justify-center w-full p-2">
				<div className="fixed m-auto w-auto bg-primary-background backdrop-blur-2xl flex items-center justify-center z-10 py-3 gap-2 pl-6 pr-4 rounded-full border-2 border-foreground shadow-sm">
					<h1 className="text-3xl font-extrabold text-primary">
						404
					</h1>
					<span className="text-primary font-bold text-3xl">
						{" "}
						Page Not Found
					</span>
					<Link
						href="/"
						className="text-foreground pointer-events-auto transition-colors duration-300 ml-2 group"
					>
						<FontAwesomeIcon
							icon={faGlobe}
							size="2x"
							className="text-primary group-hover:text-primary/50 transition-colors duration-300"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}
