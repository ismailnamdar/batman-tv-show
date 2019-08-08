import React, { memo } from "react";
import { string } from "prop-types";

/**
 * simple tag for data display
 * @type {{compare, $$typeof, type}}
 */
const Tag = memo(({ value }) => {
	return <span className={"tag"}>{value}</span>
});

Tag.propTypes = {
	value: string.isRequired,
	backgroundColor: string,
	textColor: string
};

Tag.defaultProps = {
	backgroundColor: "lightgrey",
	textColor: "black"
};

export default Tag;