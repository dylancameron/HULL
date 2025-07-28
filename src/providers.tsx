import React, { Suspense } from "react";
import { NavbarProvider } from "@/components/providers/navbar-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { Spinner } from "@/components/ui/spinner";
import ErrorBoundary from "@/pages/error";
import { ThemeProvider } from "@/components/providers/theme-provider";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ThemeProvider>
			<NavbarProvider>
				<ModalProvider>
					<ErrorBoundary>
						<Suspense
							fallback={
								<div className="flex items-center justify-center h-dvh">
									<Spinner />
								</div>
							}
						>
							{children}
						</Suspense>
					</ErrorBoundary>
				</ModalProvider>
			</NavbarProvider>
		</ThemeProvider>
	);
};

export default Providers;
