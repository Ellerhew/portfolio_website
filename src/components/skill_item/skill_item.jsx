import React from "react";
import styles from "./skill_item.module.css";

const SkillItem = ({ skill }) => {
	return (
		<li className={styles.list}>
			<div className={styles.span}>
				<span>{skill.name}</span>
				<span>{skill.number}</span>
			</div>
			<div className={styles.blackline}>
				<div className={styles.colorline} style={{ width: skill.number }}></div>
			</div>
		</li>
	);
};

export default SkillItem;
