import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import pathOr from "ramda/src/pathOr";
import dateFns from "date-fns";
import {ACTION_TYPE} from "../redux/reducers/movie";
import Tag from "../ui/views/Tag";
import Title from "../ui/views/Title";
import SingleStat from "../ui/views/SingleStat";
import InfoRow from "../ui/views/InfoRow";

const summarySafeGet = pathOr("", ["summary"]);
const originalImageSafeGet = pathOr("", ["image", "original"]);
const nameSafeGet = pathOr("", ["name"]);
const genresSafeGet = pathOr([], ["genres"]);
const ratingSafeGet = pathOr(null, ["rating", "average"]);
const countrySafeGet = pathOr(null, ["network", "country", "code"]);
const premieredSafeGet = pathOr(null, ["premiered"]);

const ShowDetail = ({ match }) => {
	const movie = useSelector(state => state.movie.dataMapById[match.params.id]);
	const dispatch = useDispatch();
	useEffect(() => {
		if(movie == null) {
			dispatch({ type: ACTION_TYPE.HTTP_REQUEST, payload: { path: "shows/" + match.params.id, type: ACTION_TYPE.SINGLE_MOVIE }})
		}
	}, [dispatch, movie, match.params.id]);
	const rating = ratingSafeGet(movie);
	const premiered = premieredSafeGet(movie) != null ? dateFns.format(new Date(premieredSafeGet(movie)), "DD MMM YYYY") : null;
	return <div style={{ height: window.innerHeight, width: "100%", backgroundColor: "#070707" }}><div className={"show-detail-container"}>
		<img src={originalImageSafeGet(movie)} alt={nameSafeGet(movie)}/>
		<div className={"show-detail"}>
			{rating != null && <SingleStat value={rating}/>}
			<Title value={nameSafeGet(movie)}/>
			<InfoRow country={countrySafeGet(movie)} premiered={premiered}/>
			{genresSafeGet(movie).map((genre) => <Tag key={movie.title + genre} value={genre}/>)}
			<div dangerouslySetInnerHTML={{__html: summarySafeGet(movie).replace(/(<? *script)/gi, 'illegalscript')}}/>
		</div>
	</div>
	</div>
};

export default ShowDetail;