import React from "react";

const ShowDetail = ({ match }) => {
	return <div>Show Detail {match.params.id}</div>
};

export default ShowDetail;