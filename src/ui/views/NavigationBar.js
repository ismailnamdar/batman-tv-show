import React from "react";
import routes from "../../configs/routes";
import {Link} from "react-router-dom";
import GlobeItem from "../components/GlobeItem";

/**
 * contains localization toggle item and routes
 * @returns {*}
 * @constructor
 */
const NavigationBar = () => <ul className="nav">
	{routes.map(({name, path, right}) => name != null && <Link key={path} to={path}><li key={name + path} className={right ? "right" : "left" }>{name}</li></Link>)}
	<GlobeItem/>
</ul>;

export default NavigationBar;