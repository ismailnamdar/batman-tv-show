import React, { useEffect, memo } from "react";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPE} from "../../redux/reducers/movie";
import MovieList from "../views/MovieList";
import CenteredSpin from "../views/CenteredSpin";

const MovieListContainer = memo(({ showName }) => {
	const dispatch = useDispatch();
	// take data from redux
	const { data, loading } = useSelector(state => ({
		data: state.movie.data,
		loading: state.movie.loading
	}));
	useEffect(() => {
		dispatch({
			type: ACTION_TYPE.HTTP_REQUEST,
			payload: {method: "GET", path: "/search/shows", params: {q: showName}, type: ACTION_TYPE.SEARCH_MOVIE}
		});
	}, [dispatch, showName]);
	if(loading) {
		return <CenteredSpin/>;
	}
	return <MovieList data={data}/>;
});

export default MovieListContainer;