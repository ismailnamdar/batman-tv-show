import React from "react";
import MovieContentContainer from "../ui/containers/MovieContentContainer";

const MovieDetail = ({ match }) => {
	return <div style={{ height: window.innerHeight, width: window.innerWidth, backgroundColor: "#070707" }}>
			<MovieContentContainer movieId={match.params.id}/>
	</div>
};

export default MovieDetail;