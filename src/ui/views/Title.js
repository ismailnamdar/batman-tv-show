import React, { memo } from "react";
import { string } from "prop-types";

const Title = memo(({ value }) => <span className={"title"}>
	{value}
</span>);

Title.propTypes = {
	value: string.isRequired
};

export default Title;