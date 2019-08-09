import React from "react";
import { FaRegFlag } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const InfoRow = ({ country, premiered }) => <div className={"info-row-container"}>
	{country != null && <><FaRegFlag className={"first-icon"}/>
	<span className={"info-row-label"}>{country}</span></>}
	{premiered != null && <><IoMdTime className={"icon"}/>
	<span className={"info-row-label"}>{premiered}</span></>}
</div>;

export default InfoRow;