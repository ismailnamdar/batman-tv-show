import React from "react";
import { string, number, oneOfType } from "prop-types";

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
	value: oneOfType([string, number]).isRequired
};

export default SingleStat;