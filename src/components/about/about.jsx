import React, { useState } from "react";
import { useLocation } from "react-router";
import styles from "./about.module.css";

const About = (props) => {
	const [words, setWords] = useState([
		{
			title: "Challenger",
			description: "I challenge myself to move further",
			image: "./image/challenger2.jpg",
			color: "rgba(224, 119, 34, 0.719)",
		},
		{
			title: "Team-player",
			description: "I work with team members ",
			image: "./image/teamplayer.jpg",
			color: "rgba(34, 148, 224, 0.719)",
		},
		{
			title: "Problem-solver",
			description: "I try to solve problems actively",
			image: "./image/problem-solver.png",
			color: "rgba(205, 224, 34, 0.719)",
		},
	]);

	return (
		<div className={styles.about}>
			<h1>About Me</h1>
			<ul className={styles.words}>
				{words.map((item) => (
					<li className={styles.word}>
						<img className={styles.word_image} src={item.image} />
						<div
							className={styles.word_span}
							style={{ background: item.color }}
						>
							<h1 className={styles.word_title}>{item.title}</h1>
							<p className={styles.word_description}>{item.description}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default About;
