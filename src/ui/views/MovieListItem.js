import React from "react";
import Tag from "./Tag";
import {Link} from "react-router-dom";
import { string, number, array } from "prop-types";

const MovieListItem = ({imageSrc, id, title, genres}) => {
	return <Link to={"/show-detail/" + id}>
		<li className={"movie-list-item"}>
			<img src={imageSrc} alt={"movie poster"}/>
			<div className={"movie-list-title-container"}>
				<span className={"movie-list-title"}>{title}</span>
				<div>
				{genres.map((genre) => <Tag key={title + genre} value={genre}/>)}
				</div>
			</div>
		</li>
	</Link>
};

MovieListItem.propTypes = {
	id: number,
	imageSrc: string,
	title: string,
	genres: array
};

MovieListItem.defaultProps = {
	id: 0,
	imageSrc: "",
	title: "",
	genres: []
};

export default MovieListItem;