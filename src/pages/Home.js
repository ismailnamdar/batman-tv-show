import React, {useEffect, useCallback, useState} from "react";
import {useTranslation} from "react-i18next";
import MovieListItem from "../ui/views/MovieListItem";
import MovieList from "../ui/views/MovieList";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPE} from "../redux/reducers/movie";
import pathOr from "ramda/src/pathOr";

const REQUESTED_SHOW = "batman";

const mediumImageSafeGet = pathOr("", ["image", "medium"]);
/**
 * Home page display Batman TV shows
 * @returns {*}
 * @constructor
 */
const Home = () => {
	const {t} = useTranslation("translations");
	const [showName, setShowName] = useState(REQUESTED_SHOW);
	const dispatch = useDispatch();
	// take data from redux
	const data = useSelector(state => state.movie.data);
	useEffect(() => {
		dispatch({
			type: ACTION_TYPE.FETCH_REQUESTED,
			payload: {method: "GET", path: "/search/shows", params: {q: showName}}
		});
	}, [dispatch, showName]);
	const handleChange = useCallback((e) => setShowName(e.target.value.length === 0 ? REQUESTED_SHOW : e.target.value), [setShowName]);
	return <div className={"home"}>
		<input placeholder={t("placeholders.searchShow")} onChange={handleChange}/>
		<MovieList>
			{data.map(({show}) => <MovieListItem key={"batman" + show.id} id={show.id} imageSrc={mediumImageSafeGet(show)}
																					 title={show.name} genres={show.genres}/>)}
		</MovieList>
	</div>;
};

export default Home;