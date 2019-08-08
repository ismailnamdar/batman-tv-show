import React from "react";
import Spin from "./Spin";

const CenteredSpin = () => <div style={{
	width: window.innerWidth,
	height: window.innerHeight,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#070707"
}}>
	<Spin/>
</div>;

export default CenteredSpin;