import React from "react";
import { FaRegFlag } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const InfoRow = ({ language, premiered }) => <div className={"info-row-container"}>
	<FaRegFlag className={"first-icon"}/>
	<span className={"info-row-label"}>{language}</span>
	<IoMdTime className={"icon"}/>
	<span className={"info-row-label"}>{premiered}</span>
</div>;

export default InfoRow;