import React, { memo } from "react";
import { string } from "prop-types";

/**
 * title for simple data display
 * @type {{compare, $$typeof, type}}
 */
const Title = memo(({ value }) => <span className={"title"}>
	{value}
</span>);

Title.propTypes = {
	value: string.isRequired
};

export default Title;