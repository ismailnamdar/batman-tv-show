import React, { lazy } from "react";
import { GiBatMask } from "react-icons/gi";

const Home = lazy(() => import('../pages/Home'));
const MovieDetail = lazy(() => import('../pages/MovieDetail'));

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
		Component: MovieDetail
	}
];

export default routes