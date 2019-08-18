import React, { useState, useCallback } from "react";
import SearchInput from "../views/SearchInput";
import MovieListContainer from "../containers/MovieListContainer";

const REQUESTED_SHOW = "batman";

const SearchMovie = () => {
	const [showName, setShowName] = useState(REQUESTED_SHOW);
	const handleChange = useCallback((e) => setShowName(e.target.value.length === 0 ? REQUESTED_SHOW : e.target.value), [setShowName]);
	return <>
		<SearchInput onChange={handleChange}/>
		<MovieListContainer showName={showName}/>
	</>
};

export default SearchMovie;