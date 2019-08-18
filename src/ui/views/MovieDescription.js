import React from "react";
import pathOr from "ramda/src/pathOr";
import dateFns from "date-fns";
import SingleStat from "./SingleStat";
import Title from "./Title";
import InfoRow from "./InfoRow";
import Tag from "./Tag";

const summarySafeGet = pathOr("", ["summary"]);
const nameSafeGet = pathOr("", ["name"]);
const genresSafeGet = pathOr([], ["genres"]);
const ratingSafeGet = pathOr(null, ["rating", "average"]);
const countrySafeGet = pathOr(null, ["network", "country", "code"]);
const premieredSafeGet = pathOr(null, ["premiered"]);

const MovieDescription = ({ movie }) => {
	const rating = ratingSafeGet(movie);
	const premiered = premieredSafeGet(movie) != null ? dateFns.format(new Date(premieredSafeGet(movie)), "DD MMM YYYY") : null;
	return <div className={"show-detail"}>
		{rating != null && <SingleStat value={rating}/>}
		<Title value={nameSafeGet(movie)}/>
		<InfoRow country={countrySafeGet(movie)} premiered={premiered}/>
		{genresSafeGet(movie).map((genre) => <Tag key={movie.title + genre} value={genre}/>)}
		<div dangerouslySetInnerHTML={{__html: summarySafeGet(movie).replace(/(<? *script)/gi, 'illegalscript')}}/>
	</div>;
};

export default MovieDescription;