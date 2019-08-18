import React, { memo } from "react";
import { array } from "prop-types";
import MovieListItem from "./MovieListItem";
import pathOr from "ramda/src/pathOr";

const mediumImageSafeGet = pathOr("", ["image", "medium"]);
/**
 * lists movies
 * @param children
 * @returns {*}
 * @constructor
 */
const MovieList = memo(({data}) => <ul className={"movie-list"}>
	{data.map((movie) =>
		<MovieListItem
			key={movie.id + movie.name}
			id={movie.id}
			imageSrc={mediumImageSafeGet(movie)}
			title={movie.name}
			genres={movie.genres}/>)}
</ul>);

MovieList.propTypes = {
	data: array
};

export default MovieList;