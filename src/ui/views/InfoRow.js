import React from "react";
import { FaRegFlag } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const InfoRow = ({ country, premiered }) => <div className={"info-row-container"}>
	<FaRegFlag className={"first-icon"}/>
	<span className={"info-row-label"}>{country}</span>
	<IoMdTime className={"icon"}/>
	<span className={"info-row-label"}>{premiered}</span>
</div>;

export default InfoRow;