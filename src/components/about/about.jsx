import React from "react";
import styles from "./about.module.css";

const About = (props) => {
	return (
		<div className={styles.about}>
			<h1>About</h1>
			<section className={styles.content}>
				<img
					className={styles.picture}
					src="./image/image.jpg"
					alt="profile"
				></img>
				<section className={styles.text}>
					<p>About Me</p>
					<p>My name is Yoonjung Rhew</p>
					<p>I speak fluent Korean and English</p>
					<p>I am a challenging and active problem-solver.</p>
				</section>
			</section>
		</div>
	);
};

export default About;
