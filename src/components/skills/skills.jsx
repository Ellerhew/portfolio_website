import React from "react";
import styles from "./skills.module.css";

const Skills = (props) => (
	<div className={styles.skills}>
		<h1>Skills</h1>
		<section className={styles.items}>
			<section className={styles.skill}>
				<div className={styles.name}>HTML</div>
				<ul className={styles.ul}>
					<li>HTML5</li>
				</ul>
			</section>
			<section className={styles.skill}>
				<div className={styles.name}>CSS</div>
				<ul className={styles.ul}>
					<li>CSS5</li>
					<li>PostCSS</li>
				</ul>
			</section>
			<section className={styles.skill}>
				<div className={styles.name}>JS</div>
				<ul className={styles.ul}>
					<li>DOM</li>
					<li>etc</li>
				</ul>
			</section>
			<section className={styles.skill}>
				<div className={styles.name}>REACT</div>
				<ul className={styles.ul}>
					<li>Router</li>
					<li>etc</li>
				</ul>
			</section>
			<section className={styles.skill}>
				<div className={styles.name}>Others</div>
				<ul className={styles.ul}>
					<li>Public API</li>
					<li>Firebase</li>
					<li>Github</li>
				</ul>
			</section>
		</section>
	</div>
);

export default Skills;
