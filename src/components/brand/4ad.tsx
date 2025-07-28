interface LogoProps {
	w: number | string;
	h: number | string;
	color: string;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

const FourADLogo: React.FC<LogoProps> = ({
	w,
	h,
	color,
	onMouseEnter,
	onMouseLeave,
}) => {
	return (
		<>
			<svg
				width={w}
				height={h}
				viewBox="0 0 420 420"
				xmlns="http://www.w3.org/2000/svg"
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				className="transition-colors duration-200 ease"
			>
				<path
					d="M89.7646 183.049H77.0684L89.7646 167.806V183.049Z"
					fill={color}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M121.561 144.047V153.916H123.902V149.23H128.756V204.39H123.902V199.707H121.561V209.95H60.6777V198.075H66.7842V195.734H60.6777V158.267H66.7842V155.92H60.6777V144.047H121.561ZM96.0625 154.124L72.5547 183.187V186.366H89.7646V194.229H84.9307V197.782H110.02V194.229H105.486V186.366H110.02V183.049H105.486V154.124H96.0625Z"
					fill={color}
				/>
				<path
					d="M167.537 180.493H158.333L162.554 168.044L167.537 180.493Z"
					fill={color}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M200.766 144.047V153.916H203.107V149.23H207.958V204.39H203.107V199.707H200.766V209.95H139.291V199.707H136.95V204.39H132.097V149.23H136.95V153.916H139.291V144.047H200.766ZM164.045 153.806L150.873 191.895L148.211 194.233H146.202V197.824H158.792V194.233H156.912L154.244 192.275L157.072 184.134H168.928L173.12 194.233H168.277V197.824H195.072V194.233H192.599L176.644 153.806H164.045Z"
					fill={color}
				/>
				<path
					d="M257.83 157.819V194.001H252.588V157.819H257.83Z"
					fill={color}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M292.51 144.047V155.92H285.986V158.267H292.51V195.734H285.986V198.075H292.51V209.95H218.496V199.707H216.155V204.39H211.301V149.23H216.155V153.916H218.496V144.047H292.51ZM229.39 154.079V157.819H233.968V194.068H229.39V197.628H259.034C272.384 197.628 279.124 186.676 279.124 175.722C279.124 164.77 272.448 154.079 259.034 154.079H229.39Z"
					fill={color}
				/>
				<path
					d="M57.3291 158.27V195.734H54.1523V158.27H57.3291Z"
					fill={color}
				/>
				<path
					d="M298.615 158.27V195.734H295.858V158.27H298.615Z"
					fill={color}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M306.821 135.36V218.634H46.3633V135.36H306.821ZM50.4688 140.366V213.629H302.381V140.366H50.4688Z"
					fill={color}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M354 354H0V0H354V354ZM38 127V227H315.188V127H38Z"
					fill={color}
				/>
			</svg>
		</>
	);
};

export default FourADLogo;
