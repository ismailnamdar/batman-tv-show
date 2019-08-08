import { lazy } from "react";

const Home = lazy(() => import('../pages/Home'));
const ShowDetail = lazy(() => import('../pages/ShowDetail'));

const routes = [
	{
		name: "Home",
		path: "/",
		exact: true,
		Component: Home
	},
	{
		path: "/show-detail/:id",
		exact: false,
		Component: ShowDetail
	}
];

export default routes