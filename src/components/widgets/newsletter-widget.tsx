import { useMobileInput } from "@/hooks/use-mobile-input";
import { useEffect, useState } from "react";
import { modalVariants, pageTransitionVariants } from "@/config/motion";
import { AnimatePresence, motion } from "motion/react";
import { Spinner } from "../ui/spinner";
import {
	faEnvelope,
	faGlobe,
	faUser,
	faWindow,
	faXmark,
} from "@awesome.me/kit-cbb97b3f25/icons/duotone/solid";
import clsx from "clsx";
import { CustomInput } from "../custom-input";
import Alert from "../custom-alert";
import Checkbox from "../custom-checkbox";

import CircularTimer from "../circular-timer";
import { CustomButton } from "../custom-button";
import { useModalContext } from "@/hooks/use-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NewsletterForm() {
	const { onClose } = useModalContext();
	useMobileInput(16, {
		disableAutocorrect: true, // Disable autocorrect for all inputs
	});

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [consent, setConsent] = useState<boolean>(false);

	const [nameError, setNameError] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [consentError, setConsentError] = useState<string>("");

	const [globalError, setGlobalError] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const [successHeader, setSuccessHeader] = useState<string>("");
	const [successMessage, setSuccessMessage] = useState<string>("");

	const [readMore, setReadMore] = useState<boolean>(false);
	const [validated, setValidated] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [isSubmitAttempted, setIsSubmitAttempted] = useState<boolean>(false);

	const [successTimer, setSuccessTimer] = useState<boolean>(false);
	const [elapsed, setElapsed] = useState<number>(0);

	useEffect(() => {
		if (!success || !successTimer) {
			setElapsed(0);
			return;
		}
		let animationFrameId: number;
		const startTime = performance.now();

		const animate = (now: number) => {
			const newElapsed = (now - startTime) / 1000; /// go back to 1000
			if (newElapsed >= 10) {
				setElapsed(10);
				setSuccess(false);
				setSuccessTimer(false);
				return;
			}
			setElapsed(newElapsed);
			animationFrameId = requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);
		return () => cancelAnimationFrame(animationFrameId);
	}, [success, successTimer]);

	useEffect(() => {
		const isValid = !!(name && email && consent);
		if (isValid !== validated) {
			setValidated(isValid);
		}
	}, [name, email, consent, validated]);

	// Validate name
	const validateName = () => {
		if (!name.trim()) {
			setNameError("Please enter your full name");
			return false;
		}
		setNameError("");
		return true;
	};

	const validateEmail = () => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email.trim()) {
			setEmailError("We need your email to sign you up");
			return false;
		} else if (!emailRegex.test(email)) {
			setEmailError("Please enter a valid email address.");
			return false;
		}
		setEmailError("");
		return true;
	};

	const validateConsent = () => {
		if (!consent) {
			setConsentError("Please agree to our terms to complete signup");
			return false;
		}
		setConsentError("");
		return true;
	};

	const handleReadMore = () => {
		setReadMore(!readMore);
	};

	const handleSubmit = async () => {
		setIsSubmitAttempted(true);
		setIsSubmitting(true);
		setLoading(true);
		setGlobalError("");

		// Validate all fields
		const nameValid = validateName();
		const emailValid = validateEmail();
		const consentValid = validateConsent();

		if (!(nameValid && emailValid && consentValid)) {
			setGlobalError(
				"We couldn't process your submission. Please check your info and try again."
			);
			setIsSubmitting(false);
			setLoading(false);
			setSuccess(false);
			setSuccessTimer(false);
			return;
		}

		const listId = "";
		const formEndpoint = "https://mailouts.beggars.com/subscribe";

		const formData = new FormData();
		formData.append("name", name);
		formData.append("email", email);
		formData.append("gdpr", consent ? "yes" : "no");
		formData.append("list", listId);
		formData.append("subform", "yes");

		// Send data to the form endpoint
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

		try {
			const response = await fetch(formEndpoint, {
				method: "POST",
				body: formData,
				mode: "no-cors",
			});
			clearTimeout(timeoutId);

			if (response.ok || response.type === "opaque") {
				setSuccess(true);
				setSuccessTimer(true);
				setSuccessHeader("Success!");
				setSuccessMessage(
					`Thanks, ${name}! You have successfully subscribed to the newsletter. Keep an eye on your inbox for any future updates.`
				);
			} else {
				setGlobalError("There was a problem with your submission.");
			}
		} catch (error) {
			console.error("Submission error:", error);
			setGlobalError(
				error instanceof Error
					? error.message
					: "Network error. Please try again later."
			);
			setSuccess(false);
			// Fallback to native form submission if fetch fails
			const form = document.createElement("form");
			form.action = formEndpoint;
			form.method = "POST";

			// Append form data manually
			formData.forEach((value, key) => {
				const input = document.createElement("input");
				input.type = "hidden";
				input.name = key;
				input.value = value.toString() || (value as string);
				form.appendChild(input);
			});
			document.body.appendChild(form);
			form.submit();
			document.body.removeChild(form);
		} finally {
			setIsSubmitting(false);
			setLoading(false);

			setTimeout(() => {
				setIsSubmitAttempted(false);
				setName("");
				setEmail("");
				setConsent(false);
				setValidated(false);
				setNameError("");
				setEmailError("");
				setConsentError("");
				setSuccess(false);
				setSuccessTimer(false);
			}, 10000);
		}
	};

	const readmoreButtonStyle = clsx(
		"text-[10px] cursor-pointer outline-none text-white hover:text-white/50 active:text-primary/50",
		readMore
			? "hover:text-white/50 text-white/50"
			: "text-white/50 hover:text-whie"
	);

	return (
		<>
			<motion.div
				variants={pageTransitionVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="backdrop-blur-sm mx-2 bg-black/75"
			>
				<div className="w-auto mx-auto relative z-100">
					{success && successTimer ? (
						<AnimatePresence>
							<motion.div
								variants={modalVariants}
								initial="initial"
								animate="animate"
								exit="exit"
								className="w-full mx-auto inset-0 flex items-center justify-center z-50 relative"
							>
								<div className="flex items-center mx-auto justify-center p-2 md:p-4 max-w-xl flex-grow relative">
									<div className="absolute right-2 top-2">
										<button
											title="Close"
											type="button"
											className="absolute right-0 top-0"
										>
											<CircularTimer
												elapsed={elapsed}
												duration={10}
											>
												<FontAwesomeIcon
													icon={faXmark}
													size="xs"
												/>
											</CircularTimer>
										</button>
									</div>
									{loading ? (
										<div className="flex items-center justify-center my-4">
											<Spinner />
										</div>
									) : (
										<div className="flex flex-col mx-auto items-center justify-center bottom-1/2 bg-transparent text-black py-4 w-full px-4">
											<h2 className="text-3xl text-primary font-heading md:text-4xl text-center mb-2">
												{successHeader || "Success!"}
											</h2>
											<p className="text-sm text-start text-text py-2 mb-4">
												{successMessage ||
													`Thanks, ${name}! You've successfully subscribed to the newsletter. Make sure to check your spam/junk folder for a welcome message from us! Keep an eye on your inbox for future updates.`}
											</p>
											<div className="flex justify-center items-center gap-2 w-full">
												<CustomButton
													variant="bordered"
													title="Back to home"
													fullWidth
													startContent={faGlobe}
													onPress={() => onClose()}
												>
													Return to Home
												</CustomButton>
											</div>
										</div>
									)}
								</div>
							</motion.div>
						</AnimatePresence>
					) : (
						<div className="flex text-white flex-col h-full w-full max-w-xl p-4 relative">
							<div className="flex items-start justify-between w-full">
								<h1 className="text-2xl md:text-3xl lg:text-4xl text-center mb-4 text-text">
									Newsletter
								</h1>
								<CustomButton
									variant="bordered"
									size="xs"
									onPress={onClose}
									isIconOnly
								>
									<FontAwesomeIcon icon={faXmark} />
								</CustomButton>
							</div>
							<div className="h-auto">
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="flex flex-col lg:flex-row gap-2 items-start justify-center">
										<CustomInput
											type="text"
											id="name"
											name="name"
											placeholder="Name"
											value={name}
											onChange={(e) => {
												setName(e.target.value);
											}}
											onBlur={() => {
												if (isSubmitAttempted)
													validateName();
											}}
											icon={faUser}
											error={!!nameError}
											errorMsg={nameError}
										/>
										<CustomInput
											type="email"
											id="email"
											name="email"
											placeholder="Email address"
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
											}}
											onBlur={() => {
												if (isSubmitAttempted)
													validateEmail();
											}}
											icon={faEnvelope}
											error={!!emailError}
											errorMsg={emailError}
										/>
									</div>

									<div className="flex flex-col items-center mt-2 gap-x-2">
										<Checkbox
											label="I agree to the terms and conditions"
											name="gdpr"
											id="gdpr"
											checked={consent}
											onChange={(e) => {
												setConsent(e.target.checked);
											}}
											onBlur={() => {
												if (isSubmitAttempted)
													validateConsent();
											}}
											error={!!consentError}
											errorMsg={consentError}
										/>
										<div className="flex flex-col gap-2 items-start pb-2 gap-x-1">
											<span className="text-[10px] text-text">
												<strong>
													Marketing permissions
												</strong>
												: By agreeing, I give my consent
												to Isaiah Hull to be in touch
												with me via email using the
												information I have provided in
												this form for the purpose of
												news, updates and marketing.
												{readMore && (
													<>
														<br></br>
														<br></br>
														<span className="text-[10px] text-justify">
															<strong>
																What to expect
															</strong>
															: If you wish to
															withdraw your
															consent and stop
															hearing from us,
															simply click the
															unsubscribe link at
															the bottom of every
															email we send or
															contact us at{" "}
															<a
																title="Email us"
																className="text-primary hover:text-primary/50 hover:underline"
																href="mailto:list@y-o-u-n-g.com"
															>
																list@y-o-u-n-g.com
															</a>
															. We value and
															respect your
															personal data and
															privacy. By
															submitting this
															form, you agree that
															we may process your
															information in
															accordance with
															these terms.{" "}
														</span>
													</>
												)}{" "}
												<button
													type="button"
													onClick={handleReadMore}
													className={
														readmoreButtonStyle
													}
												>
													{readMore
														? "Show less"
														: "...More"}
												</button>
											</span>
										</div>
										{/* // Alerts */}
										{globalError && (
											<Alert
												type="danger"
												className="w-full"
												message={globalError}
											/>
										)}
										<div style={{ display: "none" }}></div>
										<div className="flex w-full my-2 gap-x-4 items-center relative">
											<CustomButton
												variant="bordered"
												title="Submit"
												size="md"
												type="submit"
												onPress={handleSubmit}
												className={`w-full ${
													!validated || loading
														? " cursor-not-allowed"
														: ""
												}`}
											>
												{isSubmitting ? (
													<>
														Submitting...
														<Spinner />
													</>
												) : (
													"Submit"
												)}
											</CustomButton>
										</div>
									</div>
								</form>
								<div className="flex items-center justify-between gap-2 text-primary">
									<div className="flex items-center gap-2">
										<FontAwesomeIcon
											icon={faWindow}
											size="sm"
										/>
										<a
											title=""
											className="flex items-center gap-1 hover:underline hover:underline-offset-4 text-zinc-400 text-xs"
											href="https://beggars.com/privacypolicy/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Privacy Policy
										</a>
									</div>
									<div className="flex items-center gap-2">
										<FontAwesomeIcon
											icon={faGlobe}
											size="sm"
										/>
										<a
											className="flex items-center gap-2 font-body hover:underline hover:underline-offset-4 text-zinc-400 text-xs"
											href="https://beggars.com/cookiepolicy/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Cookie Policy
										</a>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</motion.div>
		</>
	);
}
