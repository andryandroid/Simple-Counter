import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import PropTypes from "prop-types";

//create your first component

var hour = 0;
var minutes = 0;
var seconds = 0;

Home.propTypes = {
	time: PropTypes.number
};

const badgeStyles = {
	//write the span styles here
	background: "white",
	color: "black"
};

export function Home(props) {
	if (props.time >= 60) {
		minutes = parseInt(props.time / 60);
		seconds = props.time - minutes * 60;
		hour = parseInt(minutes / 60);
		if (minutes >= 60) {
			minutes = minutes - hour * 60;
		}
	} else {
		seconds = props.time;
	}

	return (
		<div className="text-center mt-5">
			<spam style={badgeStyles}>
				{new Intl.NumberFormat("en", {
					minimumIntegerDigits: 2
				}).format(hour)}
			</spam>
			<spam> - </spam>
			<spam>
				{new Intl.NumberFormat("en", {
					minimumIntegerDigits: 2
				}).format(minutes)}
			</spam>
			<spam> - </spam>
			<spam>
				{new Intl.NumberFormat("en", {
					minimumIntegerDigits: 2
				}).format(seconds)}
			</spam>
		</div>
	);
}
