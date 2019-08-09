import React from "react";
import { array } from "prop-types";

/**
 * lists movies
 * @param children
 * @returns {*}
 * @constructor
 */
const MovieList = ({children}) => <ul className={"movie-list"}>{children}</ul>;

MovieList.propTypes = {
	children: array
};

export default MovieList;