import { Route, Router, Switch } from "wouter";
import Layout from "@/layout";
import Providers from "@/providers";
import NotFoundPage from "@/pages/not-found";
import { HomePage } from "./home";

// TODO: Fix server side rendering for 404
function SPARouter() {
	return (
		<Providers>
			<Router>
				<Layout>
					<Switch>
						<Route
							path="/"
							component={() => <HomePage id="home" />}
						/>
						<Route path="*" component={NotFoundPage} />
					</Switch>
				</Layout>
			</Router>
		</Providers>
	);
}

export default SPARouter;
