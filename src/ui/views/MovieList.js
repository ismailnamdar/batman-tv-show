import React from "react";
import { array } from "prop-types";

const MovieList = ({children}) => <ul className={"movie-list"}>{children}</ul>;

MovieList.propTypes = {
	children: array
};

export default MovieList;