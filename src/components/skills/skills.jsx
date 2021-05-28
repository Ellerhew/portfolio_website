import React, { useState } from "react";
import SkillItem from "../skill_item/skill_item";
import styles from "./skills.module.css";

const Skills = (props) => {
	const [skill, setSkill] = useState([
		{ name: "HTML", number: "90%", color: "#EC6043" },
		{ name: "CSS", number: "85%", color: "#438AEC" },
		{ name: "JAVASCRIPT", number: "75%", color: "#D3CD1B" },
		{ name: "REACT", number: "30%", color: "#1CC1D8" },
	]);

	return (
		<div className={styles.skills}>
			<h1>Skills</h1>
			<section className={styles.content}>
				<ul className={styles.skills_ul}>
					{skill.map((item) => (
						<SkillItem skill={item} />
					))}
				</ul>
				<aside className={styles.others}>
					<div className={styles.title}>Others</div>
					<ul className={styles.others_ul}>
						<li>-Github</li>
						<li>-Firebase</li>
					</ul>
				</aside>
			</section>
		</div>
	);
};

export default Skills;
