import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import pathOr from "ramda/src/pathOr";
import {ACTION_TYPE} from "../redux/reducers/movie";
import Tag from "../ui/views/Tag";
import Title from "../ui/views/Title";

const summarySafeGet = pathOr("", ["summary"]);
const originalImageSafeGet = pathOr("", ["image", "original"]);
const nameSafeGet = pathOr("", ["name"]);
const genresSafeGet = pathOr([], ["genres"]);

const ShowDetail = ({ match }) => {
	const movie = useSelector(state => state.movie.dataMapById[match.params.id]);
	const dispatch = useDispatch();
	useEffect(() => {
		if(movie == null) {
			dispatch({ type: ACTION_TYPE.HTTP_REQUEST, payload: { path: "shows/" + match.params.id, type: ACTION_TYPE.SINGLE_MOVIE }})
		}
	}, [movie]);
	return <div className={"show-detail-container"}>
		<img src={originalImageSafeGet(movie)} alt={nameSafeGet(movie)}/>
		<div className={"show-detail"}>
			<Title value={nameSafeGet(movie)}/> {genresSafeGet(movie).map((genre) => <Tag key={movie.title + genre} value={genre}/>)}
			<div className={"movie-summary"} dangerouslySetInnerHTML={{__html: summarySafeGet(movie).replace(/(<? *script)/gi, 'illegalscript')}}/>
		</div>
	</div>
};

export default ShowDetail;