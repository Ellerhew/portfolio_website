import React from "react";
import About from "../about/about";
import Skills from "../skills/skills";
import Welcome from "../welcome/welcome";
import styles from "./home.module.css";

const Home = (props) => {
	return (
		<div className={styles.home}>
			<Welcome />
			<About />
			<Skills />
		</div>
	);
};

export default Home;
