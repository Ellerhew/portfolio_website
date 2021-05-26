import React, { useEffect, useState } from "react";
import WorkItem from "../work_item/work_item";
import styles from "./works.module.css";

const Works = (props) => {
	const [works, setWorks] = useState([]);
	const [category, setCategory] = useState("all");

	const onClick = (event) => {
		const data = event.target.dataset;
		setCategory(data.value);
	};

	const fetchItems = () => {
		fetch("./data/data.json")
			.then((response) => response.json())
			.then((result) => setWorks(result.works));
	};

	useEffect(fetchItems);

	return (
		<div className={styles.works}>
			<h1>Works</h1>
			<div className={styles.buttons}>
				<button
					className={styles.button}
					onClick={onClick}
					data-key="category"
					data-value="all"
				>
					All
				</button>
				<button
					className={styles.button}
					onClick={onClick}
					data-key="category"
					data-value="javascript"
				>
					Vanilla JS
				</button>
				<button
					className={styles.button}
					onClick={onClick}
					data-key="category"
					data-value="react"
				>
					React
				</button>
			</div>
			<ul className={styles.content}>
				{works.map((work) => (
					<WorkItem work={work} key={work.id} category={category} />
				))}
			</ul>
		</div>
	);
};

export default Works;
