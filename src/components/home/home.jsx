import React from "react";
import styles from "./home.module.css";

const Home = (props) => {
	return (
		<div className={styles.home}>
			<section className={styles.image}>
				<img
					className={styles.picture}
					src="./image/image.jpg"
					alt="profile"
				></img>
			</section>
			<section className={styles.text}>
				<h1>Welcome to my</h1>
				<h1>PORTFOLIO WEBSITE.</h1>
				<h1>See who I am and</h1>
				<h1>what I can do!</h1>
			</section>
		</div>
	);
};

export default Home;
