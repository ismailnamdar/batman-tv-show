import React, { lazy } from "react";
import { GiBatMask } from "react-icons/gi";

const Home = lazy(() => import('../pages/Home'));
const ShowDetail = lazy(() => import('../pages/ShowDetail'));

const routes = [
	{
		name: <GiBatMask/>,
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