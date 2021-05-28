import React, { useRef } from "react";
import styles from "./work_item.module.css";

const WorkItem = ({ work, category }) => {
	const imgRef = useRef();
	const onMouseOver = () => {};

	function getCategory() {
		if (category === "all" || category === work.category) {
			return styles.list;
		} else {
			return styles.hidden;
		}
	}

	return (
		<li className={`${getCategory()}`}>
			<img
				ref={imgRef}
				className={styles.image}
				src={work.image}
				alt="thumbnail"
				onMouseOver={onMouseOver}
			></img>
			<h1 className={styles.title}>{work.title}</h1>
			<h4 className={styles.spec}>{work.spec}</h4>
			<p className={styles.description}>{work.description}</p>
			<a href={work.link} target="_blank">
				<button className={styles.button}>View</button>
			</a>
		</li>
	);
};

export default WorkItem;
