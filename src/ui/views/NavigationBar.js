import React from "react";
import routes from "../../configs/routes";
import {Link} from "react-router-dom";
import GlobeItem from "../components/GlobeItem";

const NavigationBar = () => <ul className="nav">
	{routes.map(({name, path, right}) => name != null && <li key={name + path} className={right ? "right" : "left" }><Link to={path}>{name}</Link></li>)}
	<GlobeItem/>
</ul>;

export default NavigationBar;