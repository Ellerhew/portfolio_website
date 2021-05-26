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
			<p className={styles.description}>{work.description}</p>
		</li>
	);
};

export default WorkItem;
