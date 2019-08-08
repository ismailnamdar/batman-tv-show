import React, {Suspense} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavigationBar from "./NavigationBar";
import routes from "../../configs/routes";
import CenteredSpin from "./CenteredSpin";

const AppRouter = () => <Suspense fallback={<CenteredSpin/>}>
	<Router>
		<NavigationBar/>
		{routes.map(({ path, exact, Component }) => <Route key={path} exact={exact} path={path} component={Component} />)}
	</Router>
</Suspense>;

export default AppRouter;