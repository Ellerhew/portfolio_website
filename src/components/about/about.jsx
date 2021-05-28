import React, { useState } from "react";
import { useLocation } from "react-router";
import styles from "./about.module.css";

const About = (props) => {
	const [words, setWords] = useState([
		{
			title: "Challenger",
			description:
				"I do not fear challenges, rather push myself to move further.",
			image: "./image/challenger2.jpg",
			color: "rgba(224, 119, 34, 0.719)",
		},
		{
			title: "Team-player",
			description:
				"I love to communicate with others to share ideas and thoughts.",
			image: "./image/teamplayer.jpg",
			color: "rgba(34, 148, 224, 0.719)",
		},
		{
			title: "Problem-solver",
			description: "When I face problems, I know how to find a solution",
			image: "./image/problem-solver.png",
			color: "rgb(150, 212, 35)",
		},
	]);

	return (
		<div className={styles.about}>
			<h1>About Me</h1>
			<ul className={styles.words}>
				{words.map((item) => (
					<li className={styles.word}>
						<div
							className={styles.imagebox}
							style={{ borderColor: item.color }}
						>
							<img className={styles.word_image} src={item.image} />
						</div>
						<div className={styles.word_span}>
							<h2 className={styles.word_title} style={{ color: item.color }}>
								{item.title}
							</h2>
							<p className={styles.word_description}>{item.description}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default About;
