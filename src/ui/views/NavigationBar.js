import React from "react";
import routes from "../../configs/routes";
import {Link} from "react-router-dom";
import GlobeItem from "../components/GlobeItem";

const NavigationBar = () => <ul className="nav">
	{routes.map(({name, path, right}) => name != null && <Link to={path}><li key={name + path} className={right ? "right" : "left" }>{name}</li></Link>)}
	<GlobeItem/>
</ul>;

export default NavigationBar;