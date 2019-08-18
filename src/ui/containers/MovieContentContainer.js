import React, { useEffect } from "react";
import pathOr from "ramda/src/pathOr";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPE} from "../../redux/reducers/movie";
import MovieDescription from "../views/MovieDescription";
const originalImageSafeGet = pathOr("", ["image", "original"]);
const nameSafeGet = pathOr("", ["name"]);

const MovieContentContainer = ({ movieId }) => {
	const movie = useSelector(state => state.movie.dataMapById[movieId]);
	const dispatch = useDispatch();
	useEffect(() => {
		if(movie == null) {
			dispatch({ type: ACTION_TYPE.HTTP_REQUEST, payload: { path: "shows/" + movieId, type: ACTION_TYPE.SINGLE_MOVIE }})
		}
	}, [dispatch, movie, movieId]);
	return <div className={"show-detail-container"}>
		<img src={originalImageSafeGet(movie)} alt={nameSafeGet(movie)}/>
		<MovieDescription movie={movie}/>
	</div>
};

export default MovieContentContainer;