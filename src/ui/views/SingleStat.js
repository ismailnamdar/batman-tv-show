import React from "react";
import { string } from "prop-types";

/**
 * display single stat in a circle
 * @param value
 * @returns {*}
 * @constructor
 */
const SingleStat = ({ value }) => <div className={"single-stat"}>
	{value}
</div>;

SingleStat.propTypes = {
	value: string.isRequired
};

export default SingleStat;