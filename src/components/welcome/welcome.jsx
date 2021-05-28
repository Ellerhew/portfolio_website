import React from "react";
import styles from "./welcome.module.css";

const Welcome = (props) => {
	//const onMouseOver = (event) => {
	//	event.target.attributes.src.value = "./image/me2.jpg";
	//};
	//
	//const onMouseOut = (event) => {
	//	event.target.attributes.src.value = "./image/me1.jpg";
	//};

	return (
		<div className={styles.content}>
			<h1 className={styles.name}>YOONJUNG RHEW</h1>
			<p className={styles.position}>front-end developer</p>
			<p className={styles.text}>presenting Portfoliio...</p>
		</div>
	);
};

export default Welcome;
